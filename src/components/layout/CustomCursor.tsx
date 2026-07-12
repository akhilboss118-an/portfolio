'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  const springX = useSpring(0, { stiffness: 500, damping: 28 })
  const springY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    if (reducedMotion) return

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      springX.set(e.clientX)
      springY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [reducedMotion, isVisible, springX, springY])

  if (reducedMotion) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: springX, y: springY }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{ scale: isHovering ? 2.5 : 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: position.x, y: position.y }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
          animate={{ scale: isHovering ? 1.5 : 1, borderColor: isHovering ? 'rgba(125,211,252,0.6)' : 'rgba(255,255,255,0.3)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  )
}
