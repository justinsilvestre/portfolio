import 'tailwindcss/tailwind.css'

import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { FooterLink } from '../components/FooterLink'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function DcLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="text-right max-w-screen-xl my-4 mx-auto px-4 text-sm pt-1">
        <Link href="/dc/" className="text-gray-500 hover:underline">
          Justin&nbsp;Silvestre - M.A. in Design and Computation,
          Winter&nbsp;2025
        </Link>
      </header>
      {children}
      <footer className="clear-left my-8">
        <hr className="max-w-screen-xl mx-auto my-4" />
        <ul className="text-center">
          <FooterLink
            href="/dc/knowclip"
            className="text-red-600 [&.active]:text-white [&.active]:bg-red-600"
            title="Knowclip"
          />
          <FooterLink
            href="/dc/hanlib"
            className="text-green-600 [&.active]:text-white [&.active]:bg-green-600"
            title="Hanlib"
          />
          <FooterLink
            href="/dc/kanjisense"
            className="text-orange-600 [&.active]:text-white [&.active]:bg-orange-600"
            title="Kanjisense"
          />
          <FooterLink
            href="/dc/kanji-through-kanshi"
            className="text-blue-600 [&.active]:text-white [&.active]:bg-blue-600"
            title="Kanji through Kanshi"
          />
        </ul>
        <p className="m-4 text-gray-500 text-sm text-center">
          <Link href="/dc/" className="text-gray-500 hover:underline">
            Justin&nbsp;Silvestre - M.A. in Design and Computation,
            Winter&nbsp;2025
          </Link>
        </p>
      </footer>
    </div>
  )
}
