'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0">
        <div className="gradient-mesh" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Touch
            </span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <SectionReveal delay={0.2}>
            <div className="glass rounded-3xl p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-sky-400 mb-4" />
                    <h3 className="text-xl font-semibold">Message Sent!</h3>
                    <p className="text-muted-foreground mt-2">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message..." required />
                    </div>
                    <Button type="submit" variant="glow" size="lg" className="w-full" disabled={loading}>
                      {loading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3} direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let&apos;s create something amazing together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, a collaboration opportunity, or just want to say hello — I&apos;d love to hear from you.
              </p>

              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 text-sm font-bold">@</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">akhil@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 text-sm font-bold">📍</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 text-sm font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Availability</p>
                    <p className="text-sm text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
