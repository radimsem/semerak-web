import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  title: 'Expert na strategii webových stránek - Radim Semerák',
  description: 'Zdravím! Jsem Radim, mladý a energický student se zálibou ve webdesignu. Rád bych vám představil moji vizi, ale než se do toho pustím, chci vás nejprve poznat!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
