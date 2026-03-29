# Email System Documentation

## Overview

Kognisense has 5 email touchpoints, all powered by Resend and React Email.

| Touchpoint | Template | API Endpoint |
|------------|----------|--------------|
| Quiz Results | `QuizEmail.tsx` | `POST /api/quiz-results` |
| Waitlist | `WaitlistEmail.tsx` | `POST /api/waitlist` |
| Contact Form | `ContactEmail.tsx` | `POST /api/contact` |
| Partnership | `PartnershipEmail.tsx` | `POST /api/partnership` |
| Newsletter | `NewsletterEmail.tsx` | `POST /api/newsletter` |

## Setup

### 1. Environment Variables

Create `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=Kognisense <noreply@kognisense.com>
ADMIN_EMAIL=hello@kognisense.com
```

### 2. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Dashboard → API Keys → Create API Key
3. Copy the key (starts with `re_`)

### 3. Verify Domain (Production)

1. Resend Dashboard → Domains → Add Domain
2. Add DNS records to your domain
3. Update `EMAIL_FROM` to use verified domain

## API Reference

### Quiz Results

Sends personalized 15-point compliance roadmap based on risk level.

**POST /api/quiz-results**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "riskLevel": "HIGH_RISK"
}
```

**Risk Levels:**
- `HIGH_RISK` - Large SMEs / SDR Mandatory
- `MEDIUM_RISK` - Exporters & Retailer Suppliers
- `PREPARATORY` - Small SMEs / Future-Proofing

---

### Waitlist

Confirms early access signup.

**POST /api/waitlist**
```json
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

---

### Contact Form

Sends notification to admin + confirmation to user.

**POST /api/contact**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "company": "Acme Foods",
  "message": "I'd like to learn more..."
}
```

---

### Partnership Application

Sends partnership application to admin + confirmation to applicant.

**POST /api/partnership**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "company": "Acme Foods",
  "role": "Managing Director",
  "collaborationPath": "design_partner",
  "message": "We're interested in..."
}
```

**Collaboration Paths:**
- `design_partner` - Food SME seeking early access
- `strategic_advisor` - ESG Consultant/Auditor
- `capital_partner` - Investor

---

### Newsletter

Confirms newsletter subscription.

**POST /api/newsletter**
```json
{
  "email": "user@example.com"
}
```

---

## Testing

Use Resend's test email addresses:

```bash
# Quiz Results
curl -X POST http://localhost:3000/api/quiz-results \
  -H "Content-Type: application/json" \
  -d '{"email": "delivered@resend.dev", "name": "Test", "riskLevel": "HIGH_RISK"}'

# Waitlist
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email": "delivered@resend.dev", "name": "Test"}'

# Contact
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email": "delivered@resend.dev", "name": "Test", "message": "Hello"}'

# Partnership
curl -X POST http://localhost:3000/api/partnership \
  -H "Content-Type: application/json" \
  -d '{"email": "delivered@resend.dev", "name": "Test", "company": "Co", "role": "CEO", "collaborationPath": "design_partner", "message": "Hi"}'

# Newsletter
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "delivered@resend.dev"}'
```

**Test Addresses:**
- `delivered@resend.dev` - Successful delivery
- `bounced@resend.dev` - Bounce simulation
- `complained@resend.dev` - Spam complaint simulation

## Preview Emails Locally

```bash
npx email dev --dir components/emails
```

Opens preview at `http://localhost:3000`

## Vercel Deployment

1. Push to Git
2. Add environment variables in Vercel Dashboard
3. Deploy: `vercel --prod`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `RESEND_API_KEY not configured` | Add env var |
| `domain not verified` | Use `onboarding@resend.dev` for testing |
| `Too many requests` | Rate limit is 5 req/sec on free tier |
| Emails in spam | Verify domain + set up SPF/DKIM |
