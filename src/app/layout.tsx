import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/reset.css'
import '../styles/global.scss'
import '../styles/index.css'
import 'typeface-karla'
import 'typeface-roboto'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hanlib',
  description: 'Texts for learning classical/literary Chinese',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
