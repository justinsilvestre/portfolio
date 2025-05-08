import Knowclip1 from '../markdown/knowclip1.mdx'
import Knowclip2 from '../markdown/knowclip2.mdx'
import Knowclip3 from '../markdown/knowclip3.mdx'

export default function KnowclipPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <h1 className="text-2xl text-red-600">Knowclip</h1>
      <img
        src="http://placecats.com/500/500"
        className="float-left mr-4 mb-4"
      />
      <Knowclip1 />
      <Knowclip2 />
      <Knowclip3 />
    </main>
  )
}
