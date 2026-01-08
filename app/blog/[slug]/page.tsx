import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { BRAND } from '@/config/brand'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: `Post Not Found | ${BRAND.name}`,
    }
  }

  return {
    title: `${post.title} | ${BRAND.name} Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  // If post doesn't exist, trigger 404
  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Main>
      <article className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-olive-600 hover:text-olive-700 dark:text-olive-400 dark:hover:text-olive-300"
            >
              ← Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mt-8 flex flex-col gap-6">
              <h1 className="font-display text-4xl font-bold tracking-tight text-olive-950 sm:text-5xl dark:text-white">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-base text-olive-600 dark:text-olive-400">
                <time dateTime={post.date}>{formattedDate}</time>
                {post.readingTime && (
                  <>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </>
                )}
                {post.author && (
                  <>
                    <span>·</span>
                    <span>By {post.author}</span>
                  </>
                )}
              </div>

              {post.excerpt && (
                <p className="text-xl/8 text-olive-700 dark:text-olive-400">{post.excerpt}</p>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-olive mt-12 max-w-none dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="mt-12 font-display text-3xl font-bold tracking-tight text-olive-950 first:mt-0 dark:text-white">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-olive-950 first:mt-0 dark:text-white">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 text-xl font-semibold text-olive-950 dark:text-white">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mt-6 text-base/7 text-olive-700 first:mt-0 dark:text-olive-400">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mt-6 list-disc space-y-2 pl-6 text-base/7 text-olive-700 dark:text-olive-400">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mt-6 list-decimal space-y-2 pl-6 text-base/7 text-olive-700 dark:text-olive-400">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="pl-2">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="mt-6 border-l-4 border-olive-600 pl-6 italic text-olive-700 dark:border-olive-400 dark:text-olive-400">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="rounded bg-olive-950/5 px-1.5 py-0.5 font-mono text-sm text-olive-950 dark:bg-white/10 dark:text-white">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-olive-950/5 p-4 dark:bg-white/5">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="cursor-pointer font-medium text-olive-600 underline decoration-olive-600/30 underline-offset-2 transition-colors hover:text-olive-700 hover:decoration-olive-700/50 dark:text-olive-400 dark:decoration-olive-400/30 dark:hover:text-olive-300"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-olive-950 dark:text-white">
                      {children}
                    </strong>
                  ),
                  hr: () => (
                    <hr className="my-12 border-t border-olive-950/10 dark:border-white/10" />
                  ),
                  table: ({ children }) => (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full border-collapse text-left text-sm">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-olive-950/5 dark:bg-white/5">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="border border-olive-950/10 px-4 py-2 font-semibold text-olive-950 dark:border-white/10 dark:text-white">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-olive-950/10 px-4 py-2 text-olive-700 dark:border-white/10 dark:text-olive-400">
                      {children}
                    </td>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Back to Blog (bottom) */}
            <div className="mt-12 border-t border-olive-950/10 pt-8 dark:border-white/10">
              <Link
                href="/blog"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-olive-600 hover:text-olive-700 dark:text-olive-400 dark:hover:text-olive-300"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </Main>
  )
}
