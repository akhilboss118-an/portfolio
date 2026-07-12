'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { certificates } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Certificates() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Certificates &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Achievements
            </span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificateCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: 20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn('glass rounded-2xl p-6 text-center group cursor-default relative overflow-hidden')}
    >
      <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500', cert.gradient)} />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/20 transition-colors">
          <Award className="w-6 h-6 text-sky-400" />
        </div>
        <h3 className="text-sm font-semibold">{cert.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
        <p className="text-[10px] text-muted-foreground/60 mt-2">{cert.date}</p>
      </div>
    </motion.div>
  )
}
