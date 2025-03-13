import 'tailwindcss/tailwind.css'

import { PropsWithChildren } from 'react'

export function DcLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header>MA Design and Computation, Winter 2025</header>
      {children}
      <footer></footer>
    </div>
  )
}
