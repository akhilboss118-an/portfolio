import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akhil Durga Prasad | Embedded Systems Engineer & AI Explorer',
  description:
    'Portfolio of Akhil Durga Prasad — Embedded Systems Engineer, IoT Enthusiast, Game Developer, and AI Explorer. Building at the intersection of hardware and intelligence.',
  keywords: [
    'Akhil Durga Prasad',
    'Embedded Systems',
    'IoT',
    'Game Developer',
    'AI',
    'Portfolio',
    'ANITS',
    'ECE',
  ],
  authors: [{ name: 'Akhil Durga Prasad' }],
  openGraph: {
    title: 'Akhil Durga Prasad | Embedded Systems Engineer',
    description:
      'Embedded Systems Engineer, IoT Enthusiast, Game Developer, and AI Explorer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akhil Durga Prasad',
    description:
      'Embedded Systems Engineer, IoT Enthusiast, Game Developer, and AI Explorer.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.className = theme;
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
