This document serves as the definitive architecture and implementation blueprint for our **Serverless Intelligent Document Processing (IDP)** and **RAG** platform. It is designed for 2026 standards: hyperscale (10M+ docs/mo), absolute tenant isolation, and a "Pivot-Ready" modular core.

---

# Definitive Plan: Serverless IDP & RAG (2026 Edition)

## 1. Executive Summary & Tech Stack

Our goal is to build a platform that handles complex document parsing (legal, regulatory, financial) with the lowest possible operational overhead and cost. We prioritize **Amazon S3 Vectors** and **Bedrock** for a native, "No-K8s" experience.

| Layer | Service | Why? |
| --- | --- | --- |
| **Orchestration** | AWS Step Functions | Resilient, handles retries/parallelism, and visual debugging. |
| **Ingestion** | Amazon S3 + EventBridge | Industry standard; triggers the entire event-driven flow. |
| **Parsing Engine** | AWS Fargate (Docling) | Needs more RAM than Lambda; Docling provides superior structural Markdown. |
| **Vector Store** | **Amazon S3 Vectors** | 90% cheaper than OpenSearch; supports billions of vectors natively in S3. |
| **Brain/LLM** | Amazon Bedrock (Nova/Claude) | Provides Prompt Caching and Model Cascading out of the box. |
| **Security** | Cognito + IAM + RLS | Absolute tenant isolation with Zero Trust principles. |

---

## 2. Core Architecture: The Event-Driven ETL

### Step 1: Ingestion & Metadata Tagging

Documents are uploaded directly to a **Pooled S3 Bucket**.

* **Pathing:** `s3://pooled-data/tenant-{id}/batch-{id}/{doc-id}.pdf`
* **Tagging:** Objects are tagged with `tier: premium/standard`, `vertical: esg/legal`, and `tenant_id`.
* **Reasoning:** S3 Tags allow us to use **ABAC (Attribute-Based Access Control)**. IAM policies will ensure that a Lambda/Fargate task can *only* see objects tagged with the specific tenant ID it is currently serving.

### Step 2: Orchestration (The State Machine)

An S3 Event triggers the **Orchestrator Step Function**.

1. **Distributed Map:** For bulk uploads (e.g., 5,000 files), Step Functions uses its "Distributed Map" state to spin up thousands of parallel executions.
2. **Tenant Context:** The first step queries DynamoDB/S3 Tags to set the "Execution Context" (e.g., `use_vlm=true`).

### Step 3: Structural Parsing (Fargate + Docling)

Docling converts the PDF to Markdown.

* **Standard:** Images are cropped and stored as files; placeholders remain in Markdown.
* **Premium (Optional VLM Flag):** If the `tier` is premium, a **Bedrock (Claude 3.5 Sonnet)** call analyzes the cropped image. The "Visual Insights" (e.g., "Chart shows 20% growth") are injected directly into the Markdown text.
* **Reasoning:** This makes "unstructured visuals" searchable via text-based vector search.

---

## 3. Deep Dive: Late Interaction & Economics

### Risk: Token Limits vs. Margin

In RAG, if your retrieval is "blurry," you end up sending 50 chunks (50k tokens) to the LLM to find one answer. This kills your profit margin.

### Mitigation: Late Interaction (BGE-M3)

Traditional embeddings (like Titan v1) compress an entire paragraph into a single list of numbers. This loses nuance. **Late Interaction** (using models like BGE-M3 on SageMaker Serverless) works differently:

1. **Multi-Vector Representation:** It keeps a separate vector for almost every token in the chunk.
2. **Fine-Grained Alignment:** When a user asks a question, the system aligns the question's tokens with the chunk's tokens.
3. **The Benefit:** It is much more accurate at finding the "needle in the haystack." You only need to send the **top 3 chunks** to the LLM instead of 50. This reduces your per-query cost by **95%**.

### Prompt Caching (The 90% Discount)

AWS Bedrock now supports **Context Caching**.

* **Implementation:** We cache the "System Prompt" (which includes the complex Government Template) and the "Document Context."
* **Result:** Subsequent questions from the same user about the same document cost **10%** of the normal price because the model "remembers" the document prefix.

---

## 4. Pivot-Ready Design: Modular Scaling

A "Pivot-Ready" design means the core engine stays the same, but the "business logic" changes per vertical.

### How to Pivot to Legal/Finance/etc.:

1. **Vertical Sharding:** Use the `vertical` S3 tag.
2. **The "Choice" State:** Inside Step Functions, a Choice node routes `vertical: legal` to a specific **Prompt Template** stored in S3/DynamoDB.
3. **Custom Logic:** If "Legal" requires a specific OCR (e.g., signature detection), you simply add a new **modular Lambda** to that branch of the Step Function. The "Core" (Ingestion, S3 Vectors, Fargate Parsing) never changes.

---

## 5. Multi-Tenancy & Risk Mitigation

### Data Isolation (No-Leakage Policy)

* **Lambda Isolation Mode:** Use the new 2026 **Tenant Isolation Mode** for Lambda. By passing a `tenant-id`, AWS ensures the compute environment is never reused across different tenants, preventing "Side-Channel" memory leaks.
* **Aurora RLS:** In the database, every table has a `tenant_id` column. **Row-Level Security** ensures that even if a developer forgets a `WHERE` clause, the database itself will refuse to return data from another tenant.

### Risk Mitigation Table

| Risk | Approach | Implementation |
| --- | --- | --- |
| **Hallucinations** | Grounding & Traceability | Include `page_num` and `bbox` in S3 Vector metadata. |
| **Cost Spikes** | Model Cascading | Use **Haiku** for extraction, **Sonnet** for final synthesis. |
| **Maintainability** | Infrastructure as Code | 100% Terraform/CDK. No manual console changes. |
| **Resilience** | Idempotency | Every Lambda checks if the `doc_uuid` is already "Processed" before starting. |

---

## 6. Next Steps

Would you like me to generate the **Terraform HCL** for the S3 Vector Bucket and the **Step Function ASL (Amazon States Language)** definition for the Premium/Standard branching logic?

[Secure Multi-tenant SaaS with AWS Lambda Deep Dive](https://www.youtube.com/watch?v=FWxwfcI7FTA)
This video is critical for understanding the "Tenant Isolation Mode" and environment reuse patterns required to maintain security at a 10,000-tenant scale.
