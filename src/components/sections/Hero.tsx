'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Download, ChevronDown } from 'lucide-react'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { RotatingSubtitle } from '@/components/animations/RotatingSubtitle'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { rotatingSubtitles } from '@/lib/constants'
import { useMousePosition } from '@/hooks/useMousePosition'

const GlowingSphere = dynamic(
  () => import('@/components/three/GlowingSphere').then((m) => ({ default: m.GlowingSphere })),
  { ssr: false }
)

export function Hero() {
  const mouse = useMousePosition()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm text-muted-foreground tracking-widest uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            <AnimatedText
              text="BANDI AKHIL DURGA PRASAD"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
              delay={0.4}
            />

            <RotatingSubtitle
              subtitles={rotatingSubtitles}
              className="text-lg sm:text-xl text-muted-foreground h-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-muted-foreground max-w-md leading-relaxed"
            >
              I learn by building. Every project is an opportunity to explore a new technology — whether it&apos;s hardware, software, AI, or game development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton onClick={() => scrollTo('projects')}>
                <span className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-shadow duration-300">
                  Explore Portfolio
                </span>
              </MagneticButton>

              <MagneticButton onClick={() => scrollTo('contact')}>
                <span className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-transparent px-6 text-sm font-medium hover:bg-secondary transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
              </MagneticButton>

              <MagneticButton onClick={() => scrollTo('contact')}>
                <span className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-transparent px-6 text-sm font-medium hover:bg-secondary transition-all duration-300">
                  Contact Me
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="hidden lg:block h-[600px] relative">
            <div className="absolute inset-0 glow rounded-full" />
            <GlowingSphere mouse={{ x: mouse.normalizedX, y: mouse.normalizedY }} />
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 2 } }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
