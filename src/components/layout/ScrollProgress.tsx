'use client'

import { useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      const p = total > 0 ? current / total : 0
      scaleX.set(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scaleX])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 origin-left"
      style={{ scaleX }}
    />
  )
}
