import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sadiq Gelatin Industries - Refining Quality Gelatin Since 1980',
  description: 'Leading manufacturer of premium gelatin products with ISO, Halal, and FDA certifications. Industrial-grade gelatin solutions for pharmaceutical, food, and cosmetic industries.',
  keywords: 'gelatin, industrial gelatin, pharmaceutical gelatin, food grade gelatin, halal gelatin, ISO certified, FDA approved',
  authors: [{ name: 'Sadiq Gelatin Industries' }],
  creator: 'Sadiq Gelatin Industries',
  publisher: 'Sadiq Gelatin Industries',
  robots: 'index, follow',
  metadataBase: new URL('https://sadiqgelatin.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/favicon-32x32.png',
    apple: '/images/favicon-32x32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sadiqgelatin.com',
    siteName: 'Sadiq Gelatin Industries',
    title: 'Sadiq Gelatin Industries - Refining Quality Gelatin Since 1980',
    description: 'Leading manufacturer of premium gelatin products with ISO, Halal, and FDA certifications.',
    images: [
      {
        url: '/images/hero-gelatin.jpg',
        width: 1200,
        height: 630,
        alt: 'Sadiq Gelatin Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadiq Gelatin Industries - Refining Quality Gelatin Since 1980',
    description: 'Leading manufacturer of premium gelatin products with ISO, Halal, and FDA certifications.',
    images: ['/images/hero-gelatin.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
