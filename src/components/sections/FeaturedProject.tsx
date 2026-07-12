'use client'

import { ExternalLink, FileText, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/constants'
import { cn } from '@/lib/utils'

const featured = projects.find((p) => p.featured)!

export function FeaturedProject() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <div className={cn('relative overflow-hidden rounded-3xl p-8 md:p-12', featured.gradient)}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Badge variant="glow" className="mb-4">Featured Project</Badge>

              <h3 className="text-3xl md:text-4xl font-bold mt-4">{featured.title}</h3>
              <p className="text-base md:text-lg text-white/70 mt-4 max-w-2xl leading-relaxed">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-white/80 border-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white text-black px-6 text-sm font-medium hover:bg-white/90 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {featured.caseStudyUrl && (
                  <a
                    href={featured.caseStudyUrl}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
