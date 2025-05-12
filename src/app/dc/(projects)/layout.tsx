import 'tailwindcss/tailwind.css'

import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function DcLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="text-right max-w-screen-xl m-auto px-4 text-sm pt-1">
        Justin&nbsp;Silvestre - M.A. in Design and Computation, Winter&nbsp;2025
      </header>
      {children}
      <footer></footer>
    </div>
  )
}
