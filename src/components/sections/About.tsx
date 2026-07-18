'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { FloatingBlobs } from '@/components/effects/FloatingBlobs'
import { cn } from '@/lib/utils'

function ProfilePhoto({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-64 h-64 md:w-80 md:h-80 mx-auto', className)}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/30 via-blue-500/30 to-indigo-500/30 animate-pulse-glow blur-2xl" />
      <div className="absolute inset-2 rounded-full border-2 border-sky-400/30 animate-float" />
      <div className="absolute inset-4 rounded-full overflow-hidden border border-sky-400/20 shadow-2xl shadow-sky-500/10">
        <Image
          src="/profile.png"
          alt="Bandi Akhil Durga Prasad watching a sunset"
          fill
          sizes="(max-width: 768px) 16rem, 20rem"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-transparent to-blue-600/20 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-sky-400/20" />
      </div>
      <div className="absolute -inset-4 rounded-full border border-sky-400/10 animate-float-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute -inset-8 rounded-full border border-sky-400/5 animate-float-slow" style={{ animationDelay: '-4s' }} />
    </div>
  )
}

export function About() {
  const story = [
    "I chase experience, not a title.",
    "I'm an ECE student who enjoys exploring technology without limiting myself to one field.",
    "From embedded systems and IoT to software, AI, game development, and web technologies — every project is an opportunity to experiment, solve problems, and learn something new.",
    "Whether it's designing hardware, developing software, debugging with AI, or building complete products — I enjoy the process of turning ideas into reality.",
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
            <ProfilePhoto />
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
