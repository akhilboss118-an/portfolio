'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export function AnimatedText({ text, className, delay = 0, once = true }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once })

  const words = text.split(' ')
  let charIndex = 0

  return (
    <div ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const i = charIndex++
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: delay + i * 0.04,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            )
          })}
          {wi < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </div>
  )
}
