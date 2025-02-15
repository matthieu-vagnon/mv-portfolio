import type { Metadata } from 'next'
import { DM_Serif_Text, Geist, Geist_Mono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const dmSerifText = DM_Serif_Text({
  variable: '--font-dm-serif-text',
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Matthieu Vagnon - Portfolio',
  description: 'Front-end engineer specialized in Next.js and UI designer since 2021.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} font-geistSans antialiased`}
      >
        <NextTopLoader />
        {children}
      </body>
    </html>
  )
}
