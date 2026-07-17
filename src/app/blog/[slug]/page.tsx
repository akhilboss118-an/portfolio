import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/constants'
import { cn, formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <time>{formatDate(post.date)}</time>
            <span className={cn('px-2 py-0.5 rounded-full text-xs', post.gradient)}>
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="prose prose-invert max-w-none mt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <p className="text-muted-foreground mt-6">
              This is a placeholder for the full blog post. Content coming soon.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
