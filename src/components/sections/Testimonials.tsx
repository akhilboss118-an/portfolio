'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { testimonials } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const pause = () => clearInterval(intervalRef.current)
  const resume = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, 5000)
  }

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Praise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            What People{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Say
            </span>
          </h2>
        </SectionReveal>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 md:p-12 text-center"
            >
              <Quote className="w-8 h-8 text-sky-400/50 mx-auto mb-6" />
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="mt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-white">{testimonials[current].initials}</span>
                </div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    i === current ? 'bg-sky-400 w-6' : 'bg-muted-foreground/30'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
