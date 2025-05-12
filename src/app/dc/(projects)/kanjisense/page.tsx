import kanjisenseEntryScrolledPng from '@/app/dc/markdown/images/kanjisense-entry-scrolled.png'
import ExportedImage from 'next-image-export-optimizer'
import Kanjisense1 from '@/app/dc/markdown/kanjisense1.mdx'
import Kanjisense2 from '../../markdown/kanjisense2.mdx'
import Kanjisense3 from '../../markdown/kanjisense3.mdx'
import Kanjisense4 from '../../markdown/kanjisense4.mdx'

import { CaptionedFigure } from '../../components/CaptionedFigure'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Kanjisense | Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function KanjisensePage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <CaptionedFigure
        className="float-left mr-4 w-full md:max-w-[40%] lg:max-w-[50%]"
        href="https://kanjisense.com/dict/青"
        caption="A Kanjisense dictionary entry, highlighting the character's graphical composition and its structural relationships with other characters."
      >
        <ExportedImage
          src={kanjisenseEntryScrolledPng}
          alt="A screenshot of a dictionary entry in the Kanjisense app"
          width={600}
          height={600}
          className="shadow-xl mb-4 object-cover"
        />
      </CaptionedFigure>
      <Kanjisense1 />
      <Kanjisense2 />
      <div className="clear-left"></div>
      <Kanjisense3 />
      <Kanjisense4 />
    </main>
  )
}
