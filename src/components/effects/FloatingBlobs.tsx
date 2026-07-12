'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'

interface FloatingBlobsProps {
  className?: string
  count?: number
}

export function FloatingBlobs({ className, count = 3 }: FloatingBlobsProps) {
  const blobs = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      size: 300 + ((i * 137 + 50) % 400),
      x: 10 + ((i * 83 + 20) % 80),
      y: 10 + ((i * 97 + 30) % 80),
      delay: i * 2,
      duration: 8 + ((i * 53) % 4),
      from: ['from-sky-500/10', 'from-blue-500/10', 'from-cyan-500/10'][i % 3],
      via: ['via-blue-500/5', 'via-indigo-500/5', 'via-sky-500/5'][i % 3],
      to: ['to-indigo-500/10', 'to-purple-500/10', 'to-blue-500/10'][i % 3],
    })),
  [count])

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-60 ${blob.from} ${blob.via} ${blob.to} animate-float-slow`}
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            animationDelay: `${blob.delay}s`,
            animationDuration: `${blob.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
