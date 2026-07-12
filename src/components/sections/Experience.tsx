'use client'

import { SectionReveal } from '@/components/animations/SectionReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { experience } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Experience
            </span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {experience.map((exp, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <TiltCard tiltDegree={5}>
                <div className={cn('glass rounded-2xl p-6 h-full relative overflow-hidden group')}>
                  <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500', exp.gradient)} />
                  <div className="relative z-10">
                    <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                    <h3 className="text-lg font-semibold mt-2">{exp.role}</h3>
                    <p className="text-sm text-sky-400 mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground/70 mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
