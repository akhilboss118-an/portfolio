'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navLinks } from '@/lib/constants'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isVisible = useScrollDirection()
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isHome = pathname === '/'

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div className="glass-light rounded-2xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('#home')} className="text-sm font-semibold tracking-tight">
            BADP
          </button>

          <div className="hidden md:flex items-center gap-1">
              {isHome && navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-3 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              {!isHome && (
                <Link
                  href="/"
                  className="relative px-3 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Home
                </Link>
              )}
              <Link
                href="/blog"
                className="relative px-3 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Blog
              </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-50 glass rounded-2xl p-4 md:hidden"
          >
            {isHome && navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 text-sm rounded-xl hover:bg-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            {!isHome && (
              <Link
                href="/"
                className="block w-full text-left px-4 py-3 text-sm rounded-xl hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            )}
            <Link
              href="/blog"
              className="block w-full text-left px-4 py-3 text-sm rounded-xl hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
