import Hanlib1 from '../markdown/hanlib1.mdx'
import Hanlib2 from '../markdown/hanlib2.mdx'
import Hanlib3 from '../markdown/hanlib3.mdx'

export default function HanlibPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <h1 className="text-2xl text-red-600">Hanlib</h1>
      <img
        src="http://placecats.com/500/500"
        className="float-left mr-4 mb-4"
      />
      <Hanlib1 />
      <Hanlib2 />
      <Hanlib3 />
    </main>
  )
}
