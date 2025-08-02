import '../styles/globals.css'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://anix86.github.io/myblog'),
  title: {
    default: 'Anix86 - Developer Portfolio',
    template: '%s | Anix86'
  },
  description: 'Personal portfolio and blog of Anix86, a passionate web developer specializing in modern web technologies.',
  keywords: ['developer', 'portfolio', 'blog', 'web development', 'Next.js', 'React'],
  authors: [{ name: 'Anix86' }],
  creator: 'Anix86',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anix86.github.io/myblog',
    siteName: 'Anix86 Portfolio',
    title: 'Anix86 - Developer Portfolio',
    description: 'Personal portfolio and blog of Anix86',
    images: [{
      url: '/me.jpg',
      width: 120,
      height: 120,
      alt: 'Anix86 Profile Photo'
    }]
  },
  twitter: {
    card: 'summary',
    title: 'Anix86 - Developer Portfolio',
    description: 'Personal portfolio and blog of Anix86',
    images: ['/me.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me.jpg" type="image/jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
