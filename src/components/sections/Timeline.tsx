'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { timeline } from '@/lib/constants'

const typeIcons = {
  education: GraduationCap,
  internship: Briefcase,
  learning: BookOpen,
}

export function Timeline() {
  return (
    <section id="timeline" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Timeline &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Milestones
            </span>
          </h2>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = typeIcons[item.type]
              const isLeft = i % 2 === 0

              return (
                <TimelineItem
                  key={i}
                  item={item}
                  icon={<Icon className="w-4 h-4" />}
                  isLeft={isLeft}
                  index={i}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  icon,
  isLeft,
  index,
}: {
  item: typeof timeline[0]
  icon: React.ReactNode
  isLeft: boolean
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="hidden md:block md:w-1/2" />

      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1, type: 'spring' }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center border border-sky-500/20"
        >
          {icon}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
      >
        <div className="glass rounded-2xl p-6">
          <span className="text-xs text-sky-400 font-mono">{item.year}</span>
          <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
          <p className="text-sm text-muted-foreground/70 mt-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
