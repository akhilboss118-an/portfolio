import Link from 'next/link'
import { Calendar, ArrowUpRight } from 'lucide-react'
import { blogPosts } from '@/lib/constants'
import { cn, formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Blog | Bandi Akhil Durga Prasad',
  description: 'Thoughts on embedded systems, AI, game development, and building things.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Latest{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            Blog
          </span>
        </h1>
        <p className="text-muted-foreground mb-16 max-w-lg">
          Thoughts on embedded systems, AI, game development, and building things.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block glass rounded-2xl p-6 hover:glow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <time>{formatDate(post.date)}</time>
                <span className={cn('px-2 py-0.5 rounded-full text-xs', post.gradient)}>
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-sky-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-1 text-sm text-sky-400 mt-4">
                Read More <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
