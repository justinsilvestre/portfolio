import ExportedImage from 'next-image-export-optimizer'
import Hanlib1 from '../../markdown/hanlib1.mdx'
import Hanlib2 from '../../markdown/hanlib2.mdx'
import Hanlib3 from '../../markdown/hanlib3.mdx'
import hanlibWordsPassageScreenshotPng from '@/app/dc/markdown/images/hanlib-words-passage-screenshot.png'
import hanlibPopupCaptureGif from '@/app/dc/markdown/images/hanlib-gloss-popover-capture.gif'
import { CaptionedFigure } from '../../components/CaptionedFigure'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Hanlib | Justin Silvestre | M.A. in Design and Computation, Winter 2025',
}

export default function HanlibPage() {
  return (
    <main className="p-4 max-w-screen-xl m-auto">
      <h1 className="text-2xl text-green-600">Hanlib</h1>
      <Hanlib1 />
      <CaptionedFigure
        className="w-[700px] mr-4 mb-4"
        href="https://hanlib.com"
        caption="The automatically generated interactive glosses in Hanlib allow word-by-word dictionary lookups and easy viewing of correspondences between the Chinese text and an English translation."
      >
        <ExportedImage
          src={hanlibPopupCaptureGif}
          alt="A screenshot of the Hanlib user interface"
          width={800}
          height={700}
        />
      </CaptionedFigure>
      <Hanlib2 />
      <Hanlib3 />
    </main>
  )
}
