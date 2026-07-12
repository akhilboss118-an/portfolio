'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { projects, projectFilterCategories } from '@/lib/constants'
import type { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Projects
            </span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-10">
            {projectFilterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-sky-500/20'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <SectionReveal delay={index * 0.1}>
      <TiltCard tiltDegree={4}>
        <div className="glass rounded-2xl overflow-hidden group h-full flex flex-col">
          <div className={cn('relative h-48 overflow-hidden', project.gradient)}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl font-bold text-white/10 select-none">{project.title.charAt(0)}</div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
              {project.liveUrl && (
                <a href={project.liveUrl} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.caseStudyUrl && (
                <a href={project.caseStudyUrl} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                  <FileText className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-base font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
              {project.description}
            </p>
          </div>
        </div>
      </TiltCard>
    </SectionReveal>
  )
}
