import { Metadata } from 'next'
import KanjiThroughKanshi1 from '../../markdown/kanji-through-kanshi1.mdx'
import KanjiThroughKanshi2 from '../../markdown/kanji-through-kanshi2.mdx'
import KanjiThroughKanshi3 from '../../markdown/kanji-through-kanshi3.mdx'

export const metadata: Metadata = {
  title: 'Kanji through Kanshi | M.A. in Design and Computation, Winter 2025',
}

export default function KanjiThroughKanshiPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <KanjiThroughKanshi1 />
      <KanjiThroughKanshi2 />
      <KanjiThroughKanshi3 />
    </main>
  )
}
