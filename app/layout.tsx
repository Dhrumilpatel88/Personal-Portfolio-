import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { GrainOverlay } from '@/components/effects/GrainOverlay'
import { BootSequence } from '@/components/effects/BootSequence'
import { CursorProvider } from '@/components/effects/CursorProvider'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['300', '400', '500'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dhrumil Patel — Developer × Security',
  description:
    'Full-Stack Developer and aspiring Cybersecurity professional from Gandhinagar, GJ. Building scalable digital experiences and secure systems.',
  keywords: ['Full-Stack Developer', 'Cybersecurity', 'Angular', 'Node.js', 'Portfolio', 'Dhrumil Patel'],
  authors: [{ name: 'Dhrumil Patel' }],
  openGraph: {
    title: 'Dhrumil Patel — Developer × Security',
    description: 'Full-Stack Developer and aspiring Cybersecurity professional.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <body className="bg-bg text-white font-body overflow-x-hidden">
        <GrainOverlay />
        <BootSequence />
        <CursorProvider />
        {children}
      </body>
    </html>
  )
}
