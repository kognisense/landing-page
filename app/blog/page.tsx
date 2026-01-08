import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { BRAND } from '@/config/brand'

export const metadata: Metadata = {
  title: `Blog | ${BRAND.name}`,
  description: 'Insights on ESG compliance, document automation, and UK regulatory requirements for Food SMEs.',
}

function BlogPostCard({
  slug,
  title,
  date,
  excerpt,
  author,
  readingTime,
}: {
  slug: string
  title: string
  date: string
  excerpt: string
  author?: string
  readingTime?: string
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-olive-950/10 bg-white p-6 transition-all hover:shadow-md dark:border-white/10 dark:bg-olive-950">
      <div className="flex items-center gap-3 text-sm text-olive-600 dark:text-olive-400">
        <time dateTime={date}>{formattedDate}</time>
        {readingTime && (
          <>
            <span>·</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>

      <Link href={`/blog/${slug}`} className="group cursor-pointer">
        <h2 className="text-2xl font-semibold tracking-tight text-olive-950 transition-colors group-hover:text-olive-700 dark:text-white dark:group-hover:text-olive-300">
          {title}
        </h2>
      </Link>

      <p className="text-base/7 text-olive-700 dark:text-olive-400">{excerpt}</p>

      <div className="flex items-center justify-between">
        {author && (
          <span className="text-sm font-medium text-olive-950 dark:text-white">{author}</span>
        )}
        <Link
          href={`/blog/${slug}`}
          className="cursor-pointer text-sm font-medium text-olive-600 hover:text-olive-700 dark:text-olive-400 dark:hover:text-olive-300"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}

export default function Page() {
  const posts = getAllPosts()

  return (
    <Main>
      <HeroSimpleCentered
        headline="Blog"
        subheadline={
          <p>
            Insights on ESG compliance, document automation, and navigating UK regulatory requirements
            for Food SMEs.
          </p>
        }
      />

      <section className="py-24">
        <Container>
          {posts.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center">
              <Text className="text-olive-700 dark:text-olive-400">
                No blog posts yet. Check back soon for insights on ESG compliance and document
                automation.
              </Text>
            </div>
          ) : (
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </Main>
  )
}
