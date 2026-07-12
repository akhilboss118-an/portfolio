'use client'

import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { FloatingBlobs } from '@/components/effects/FloatingBlobs'
import { cn } from '@/lib/utils'

function ProfilePlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-64 h-64 md:w-80 md:h-80 mx-auto', className)}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/30 via-blue-500/30 to-indigo-500/30 animate-pulse-glow blur-2xl" />
      <div className="absolute inset-2 rounded-full border-2 border-sky-400/30 animate-float" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 backdrop-blur-3xl flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="text-4xl font-bold text-sky-400/80">AD</div>
          <div className="text-[10px] text-muted-foreground mt-1 tracking-widest">EMBEDDED • AI • IoT</div>
        </div>
        <div className="absolute inset-0 rounded-full border border-sky-400/10" />
      </div>
      <div className="absolute -inset-4 rounded-full border border-sky-400/10 animate-float-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute -inset-8 rounded-full border border-sky-400/5 animate-float-slow" style={{ animationDelay: '-4s' }} />
    </div>
  )
}

export function About() {
  const story = [
    "My journey started with curiosity.",
    "Every project became an opportunity to learn.",
    "I love building things—from embedded systems and IoT to AI, software, and game development.",
    "For me, technology isn't just coding. It's creativity brought to life.",
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <FloatingBlobs count={2} />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Story
            </span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal delay={0.2}>
            <ProfilePlaceholder />
          </SectionReveal>

          <div className="space-y-6">
            {story.map((paragraph, i) => (
              <SectionReveal key={i} delay={0.3 + i * 0.15}>
                <motion.p
                  className="text-base md:text-lg leading-relaxed text-muted-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {paragraph}
                </motion.p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
