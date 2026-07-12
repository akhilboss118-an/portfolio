'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { stats } from '@/lib/constants'

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 text-center group hover:glow-sm transition-all duration-500"
    >
      <div className="text-3xl md:text-4xl font-bold text-sky-400">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
    </motion.div>
  )
}
