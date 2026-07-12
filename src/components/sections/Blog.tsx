'use client'

import { ArrowUpRight, Calendar } from 'lucide-react'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { blogPosts } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Blog() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Articles
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Blog
            </span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <TiltCard tiltDegree={4}>
                <a
                  href={`/blog/${post.slug}`}
                  className="glass rounded-2xl overflow-hidden block group h-full"
                >
                  <div className={cn('h-40 relative', post.gradient)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white/10">{post.title.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                      <span className="text-sky-400 ml-auto">{post.category}</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-sky-400 transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-sm text-sky-400 mt-4">
                      Read More <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </a>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
