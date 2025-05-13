import Hanlib1 from '../../markdown/hanlib1.mdx'
import Hanlib2 from '../../markdown/hanlib2.mdx'
import Hanlib3 from '../../markdown/hanlib3.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Hanlib | Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function HanlibPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <Hanlib1 />
      <Hanlib2 />
      <Hanlib3 />
    </main>
  )
}
