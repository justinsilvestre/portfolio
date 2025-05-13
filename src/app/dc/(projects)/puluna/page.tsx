import 'tailwindcss/tailwind.css'
import Puluna1 from '../../markdown/puluna1.mdx'
import Puluna2 from '../../markdown/puluna2.mdx'

export default function PulunaPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <h1 className="text-2xl text-purple-600">Knowclip</h1>
      <img
        src="http://placecats.com/neo_2/500/500"
        className="float-left mr-4 mb-4"
      />
      <Puluna1 />
      <Puluna2 />
    </main>
  )
}
