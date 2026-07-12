'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ y: -8 }}
    >
      {children}
    </motion.div>
  )
}
