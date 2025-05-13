import Kanjisense1 from '@/app/dc/markdown/kanjisense1.mdx'
import Kanjisense2 from '../../markdown/kanjisense2.mdx'
import Kanjisense3 from '../../markdown/kanjisense3.mdx'
import Kanjisense4 from '../../markdown/kanjisense4.mdx'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Kanjisense | Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function KanjisensePage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <Kanjisense1 />
      <Kanjisense2 />
      <div className="clear-left"></div>
      <Kanjisense3 />
      <Kanjisense4 />
    </main>
  )
}
