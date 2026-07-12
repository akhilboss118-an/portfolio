'use client'

import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  as?: 'button' | 'a'
  href?: string
}

export function MagneticButton({ children, className, onClick, as = 'button', href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  const Tag = as === 'a' ? motion.a : motion.button

  return (
    <div ref={ref} className="inline-block transition-transform duration-200 ease-out" onMouseMove={handleMouse} onMouseLeave={handleLeave}>
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Tag>
    </div>
  )
}
