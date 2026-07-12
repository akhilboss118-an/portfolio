'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      <div className="gradient-mesh" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[10rem] sm:text-[14rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground/10 to-foreground/5 select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="-mt-12 sm:-mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 text-sm font-medium mt-8 hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
