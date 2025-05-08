import Kanjisense1 from '../markdown/kanjisense1.mdx'
import Kanjisense2 from '../markdown/kanjisense2.mdx'
import Kanjisense3 from '../markdown/kanjisense3.mdx'

export default function KanjisensePage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <h1 className="text-2xl text-red-600">Kanjisense</h1>
      <img
        src="http://placecats.com/500/500"
        className="float-left mr-4 mb-4"
      />
      <Kanjisense1 />
      <Kanjisense2 />
      <Kanjisense3 />
    </main>
  )
}
