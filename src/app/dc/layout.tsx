import 'tailwindcss/tailwind.css'

import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Justin Silvestre - M.A. Design and Computation, Winter 2025',
  description:
    'Berlin-based software developer specializing in functional TypeScript.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header>MA Design and Computation, Winter 2025</header>
      {children}
      <footer></footer>
    </div>
  )
}
