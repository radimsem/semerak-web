import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-doc',
  display: 'swap'
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  title: 'Expert na strategii webových stránek - Radim Semerák',
  description: 'Zdravím! Jsem Radim, mladý a energický student se zálibou ve webdesignu. Rád bych vám představil moji vizi, ale než se do toho pustím, chci vás nejprve poznat!',
  authors: {
    name: 'Radim Semerák',
    url: 'https://www.radimsemerak.cz/'
  },
  openGraph: {
    locale: 'cs-CZ',
    type: 'website',
    title: 'Expert na strategii webových stránek - Radim Semerák',
    description: 'Zdravím! Jsem Radim, mladý a energický student se zálibou ve webdesignu. Rád bych vám představil moji vizi, ale než se do toho pustím, chci vás nejprve poznat!',
    url: 'https://www.radimsemerak.cz/',
    images: 'https://www.radimsemerak.cz/img/background/og-image.png'
  }
}
