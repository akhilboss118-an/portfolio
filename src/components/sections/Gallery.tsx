'use client'

import Image from 'next/image'
import { SectionReveal } from '@/components/animations/SectionReveal'
import { gallery } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionReveal>
          <span className="text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Visual
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Photo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Gallery
            </span>
          </h2>
        </SectionReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map((item, i) => (
            <GalleryTile key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryTile({ item, index }: { item: typeof gallery[0]; index: number }) {
  const heights = ['h-48', 'h-64', 'h-56', 'h-72', 'h-52', 'h-60']
  return (
    <SectionReveal delay={index * 0.05}>
      <div
        className={cn(
          'relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid mb-4',
          heights[index % heights.length]
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={cn('absolute inset-0 bg-gradient-to-br mix-blend-overlay', item.gradient)} />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white font-semibold text-lg">{item.title}</p>
          <p className="text-white/60 text-sm">{item.category}</p>
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 backdrop-blur text-white/70">
            {item.category}
          </span>
        </div>
      </div>
    </SectionReveal>
  )
}
