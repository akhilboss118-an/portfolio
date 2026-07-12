'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
  velocity: number
}

export function useMousePosition() {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    velocity: 0,
  })
  const previous = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const prev = previous.current
    const dx = e.clientX - prev.x
    const dy = e.clientY - prev.y
    const velocity = Math.sqrt(dx * dx + dy * dy)

    previous.current = { x: e.clientX, y: e.clientY }

    setMouse({
      x: e.clientX,
      y: e.clientY,
      normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
      normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
      velocity,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return mouse
}
