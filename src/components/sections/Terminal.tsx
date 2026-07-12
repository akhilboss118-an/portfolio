'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'

interface Command {
  input: string
  output: string
}

const helpText = `Available commands:
  about     - Learn about me
  skills    - View my skills
  projects  - See my projects
  timeline  - View my journey
  contact   - Get in touch
  clear     - Clear terminal
  help      - Show this message`

const responses: Record<string, string> = {
  about:
    'Embedded Systems Engineer, IoT Enthusiast, Game Developer, and AI Explorer. Building at the intersection of hardware and intelligence.',
  skills:
    'C, C++, Python, Java, JavaScript, HTML, CSS, SQL, Unity, Godot, Arduino, ESP32, IoT, ML, Computer Vision, Git, Linux.',
  projects:
    'AI-Powered IoT Dashboard, Embedded Systems Monitor, Unity Game Prototype, Smart Home Hub, Computer Vision Recognition, and more.',
  timeline:
    'ANITS (ECE) → Embedded Systems IoT Internship → AI & Game Dev → Full Stack Development.',
  contact: 'Email: akhil@example.com | GitHub: github.com | LinkedIn: linkedin.com',
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Command[]>([
    { input: 'help', output: helpText },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()

    if (!cmd) return

    let output = ''

    if (cmd === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    if (cmd === 'help') {
      output = helpText
    } else if (responses[cmd]) {
      output = responses[cmd]
    } else {
      output = `Command not found: ${cmd}. Type 'help' for available commands.`
    }

    setHistory((prev) => [...prev, { input: cmd, output }])
    setInput('')
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-sm transition-all duration-300"
        aria-label="Open terminal"
      >
        <TerminalIcon className="w-5 h-5 text-sky-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-40 w-[calc(100%-2rem)] sm:w-96"
          >
            <div className="glass rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono text-muted-foreground">portfolio@cli:~$</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 max-h-64 overflow-y-auto font-mono text-xs space-y-2 scrollbar-hide">
                {history.map((cmd, i) => (
                  <div key={i}>
                    <div>
                      <span className="text-sky-400">$ </span>
                      <span>{cmd.input}</span>
                    </div>
                    <div className="text-muted-foreground whitespace-pre-line mt-1">{cmd.output}</div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              <form onSubmit={handleSubmit} className="border-t border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-sky-400 font-mono text-xs">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-xs font-mono placeholder-muted-foreground"
                    placeholder="Type a command..."
                  />
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
