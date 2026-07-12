'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/icons'
import { socialLinks } from '@/lib/constants'
import { type ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  Github: <GithubIcon className="w-4 h-4" />,
  Linkedin: <LinkedinIcon className="w-4 h-4" />,
  Mail: <Mail className="w-4 h-4" />,
  Instagram: <InstagramIcon className="w-4 h-4" />,
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="relative mb-8 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent animate-pulse-glow" />
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold">AKHIL DURGA PRASAD</p>
            <p className="text-xs text-muted-foreground mt-1">
              Embedded Systems Engineer & AI Explorer
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Akhil Durga Prasad. Crafted with precision.</p>
        </div>
      </div>
    </footer>
  )
}
