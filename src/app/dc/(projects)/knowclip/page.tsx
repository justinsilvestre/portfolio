import { Metadata } from 'next'
import Knowclip1 from '../../markdown/knowclip1.mdx'
import Knowclip2 from '../../markdown/knowclip2.mdx'
import Knowclip3 from '../../markdown/knowclip3.mdx'

export const metadata: Metadata = {
  title:
    'Knowclip | Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function KnowclipPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <Knowclip1 />
      <Knowclip2 />
      <Knowclip3 />
    </main>
  )
}
