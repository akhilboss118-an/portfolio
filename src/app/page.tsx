'use client'

import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Footer } from '@/components/layout/Footer'
import { Particles } from '@/components/effects/Particles'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Timeline } from '@/components/sections/Timeline'
import { Experience } from '@/components/sections/Experience'
import { Stats } from '@/components/sections/Stats'
import { Projects } from '@/components/sections/Projects'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { Certificates } from '@/components/sections/Certificates'
import { Testimonials } from '@/components/sections/Testimonials'
import { Gallery } from '@/components/sections/Gallery'
import { Blog } from '@/components/sections/Blog'
import { Contact } from '@/components/sections/Contact'
import { Terminal } from '@/components/sections/Terminal'

export default function Home() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />

      <div className="relative min-h-screen">
        <div className="noise-overlay" />
        <Particles />

        <Navbar />
        <ScrollProgress />

        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Experience />
          <Stats />
          <Projects />
          <FeaturedProject />
          <Certificates />
          <Testimonials />
          <Gallery />
          <Blog />
          <Contact />
        </main>

        <Footer />
        <Terminal />
      </div>
    </ThemeProvider>
  )
}
