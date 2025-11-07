import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { quoteflowConfig } from '../quoteflow.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${quoteflowConfig.branding.companyName} - Professional Plumbing Services`,
  description: 'Fast, reliable, and affordable plumbing solutions. Get an instant quote for your plumbing job in seconds.',
  metadataBase: new URL('https://www.adamplumbing.co.uk'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


