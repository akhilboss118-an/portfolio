'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RotatingSubtitleProps {
  subtitles: string[]
  className?: string
}

export function RotatingSubtitle({ subtitles, className }: RotatingSubtitleProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [subtitles.length])

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block"
        >
          {subtitles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
