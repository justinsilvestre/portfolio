import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/reset.css'
import '../../styles/global.scss'
import '../../styles/index.css'
import 'typeface-karla'
import 'typeface-roboto'
import MainLayout from '../../components/MainLayout'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Silvestre - Software Developer',
  description:
    'Berlin-based software developer specializing in functional TypeScript.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
