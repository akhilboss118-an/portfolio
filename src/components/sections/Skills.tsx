'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2, FileJson, FileCode, Database, Gamepad2, Cpu, Wifi, Zap,
  Brain, MessageSquare, Eye, GitBranch, Terminal, Server,
} from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { skills } from '@/lib/constants'
import type { SkillCategory } from '@/types'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, FileJson, FileCode, Database, Gamepad2, Cpu, Wifi, Zap,
  Brain, MessageSquare, Eye, GitBranch, Terminal, Server,
}

const categories: SkillCategory[] = ['Programming', 'Game Development', 'Embedded Systems', 'AI', 'Tools']

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Programming')

  const filtered = skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Technologies
            </span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-sky-500/20'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {filtered.map((skill, i) => {
              const Icon = iconMap[skill.icon] || GithubIcon
              return (
                <TiltCard key={skill.name} tiltDegree={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-2xl p-4 flex flex-col items-center gap-3 group cursor-default"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                </TiltCard>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
