import ExportedImage from 'next-image-export-optimizer'
import hanlibGlossEditingUiPng from '../images/hanlib-gloss-editing-ui.png'
import { externalLink as externalLinkIcon } from 'react-icons-kit/fa/externalLink'
import { github as githubIcon } from 'react-icons-kit/icomoon/github'
import Icon from 'react-icons-kit'

import hanlibPopupCaptureGif from '../images/hanlib-popup-capture.gif'
import { CaptionedFigure } from '../../components/CaptionedFigure'
import { PropsWithChildren } from 'react'
import { ProjectTitle } from '../../components/ProjectTitle'

export { HanlibKaeritenToKakikudashibun } from './HanlibKaeritenToKakikudashibun'

export const HanlibTitle = () => (
  <ProjectTitle
    title={<div className="text-8xl mb-4  text-green-600">Hanlib</div>}
    year="2019–present"
    links={[
      {
        href: 'https://github.com/justinsilvestre/hanlib',
        text: 'Introduction and source code on Github',
        icon: <Icon icon={githubIcon} />,
      },
      {
        href: 'https://justinsilvestre.github.io/hanlib/',
        text: 'Website (work in progress)',
        icon: <Icon icon={externalLinkIcon} />,
      },
    ]}
  />
)

export const HanlibQuote = () => (
  <blockquote className="md:float-left mx-auto md:mr-4 max-w-[400px] text-xl italic md:mb-4 border-l-4 pl-4  mt-4 mb-8 text-blue">
    <p className="mb-4">
      “But human speech is not just a blowing of air. Speech has something of
      which it speaks, something it refers to.”
    </p>
    <p className="mb-4">
      “Yes, but what it refers to is peculiarly unfixed. So is there really
      anything it speaks of? Or has nothing ever been spoken of? You take it to
      be different from the chirping of baby birds. Is there really any
      difference? Or is there no difference? Is there any dispute going on
      there? Or is there no dispute? Is anything demonstrated by it? Or is
      nothing demonstrated by it?”
    </p>
    <p>-Zhuangzi, translated by Brook Ziporyn</p>
  </blockquote>
)

export const HanlibUiBig = () => (
  <CaptionedFigure
    className="float-left w-[700px] mr-4 mb-4"
    href="https://hanlib.com"
    caption="In addition to instant dictionary lookups, the dynamically generated interactive glosses in Hanlib allow easy viewing of correspondences between the Chinese text and an English translation. By seeing the changes in word order expressed through highlighting of words, differences between Chinese and English syntax can be grasped intuitively."
  >
    <ExportedImage
      className="mb-4 shadow-xl"
      src={hanlibPopupCaptureGif}
      alt="A screenshot of the Hanlib user interface"
      width={800}
      height={700}
    />
  </CaptionedFigure>
)

export const HanlibKaeriten = () => (
  <CaptionedFigure
    className="w-[300px] md:float-left m-auto md:mr-4"
    caption={
      <>
        <i>Kaeriten</i> annotations (highlighted in{' '}
        <span className="text-orange-600">orange</span> above) are used to mark
        places in a Chinese sentence where word order deviates from Japanese.
      </>
    }
    captionAlign="left"
  >
    <div className="text-3xl">
      楚人有<sub className="text-xs text-orange-600">下</sub>鬻
      <sub className="text-xs text-orange-600">二</sub>盾與
      <sub className="text-xs text-orange-600">レ一</sub>矛者
      <sub className="text-xs text-orange-600">上</sub>
    </div>
  </CaptionedFigure>
)

const 楚 = <span className="text-red-500">楚</span>
const 人 = <span className="text-orange-500">人</span>
const 有 = <span className="text-yellow-500">有</span>
const 鬻 = <span className="text-green-500">鬻</span>
const 盾 = <span className="text-blue-500">盾</span>
const 與 = <span className="text-indigo-500">與</span>
const 矛 = <span className="text-purple-500">矛</span>
const 者 = <span className="text-pink-500">者</span>
export const HanlibKakikudashibun = () => (
  <CaptionedFigure
    className="w-[300px] md:float-left clear-left m-auto md:mr-4"
    caption={
      <>
        Once the Chinese characters are rearranged to match Japanese word order,
        the sentence only requires a few Japanese grammatical endings to be
        added in order to form a coherent word-for-word translation.
      </>
    }
    captionAlign="left"
  >
    <div className="text-2xl">
      {楚}
      {人}
      {盾}
      {矛}
      {與}
      {鬻}
      {者}
      {有}
    </div>
    <div className="text-2xl">
      <div className="text-2xl">
        {楚}
        {人}
        <small>に</small>
        {盾}
        <small>と</small>
        {矛}
        <small>
          <span className="text-indigo-500">と</span>を
        </small>
        {鬻}
        <small>ぐ</small>
        {者}
        {有}
        <small>り</small>
      </div>
    </div>
    <div className="text-2xl">
      <div className="text-2xl">
        楚人<small>に</small>盾<small>と</small>矛<small>とを</small>鬻
        <small>ぐ</small>者有<small>り</small>
      </div>
    </div>
  </CaptionedFigure>
)

const glossingSteps = [
  [
    `Chu person, be_there sell shield and spear one_who.`,
    `Chu person, be there sell shield and spear one who.`,
  ],
  [
    `2Chu 1person, be_there 2sell 3shield 4and 5spear 1one_who.`,
    `person Chu, be_there one who sell shield and spear.`,
  ],
  [
    `[Among] 2[of] Chu 1[the] person, be_there 2sell 3shield 4and 5spear 1one_who.`,
    `Among the person of Chu, be there one who sell shield and spear.`,
  ],
  [
    `[Among] 2[of] Chu 1[the] person[:people], be_there[:there_was] 2sell[:sold] 3shield[s] 4and 5spear[s] 1one_who.`,
    `Among the people of Chu, there was one who sold shields and spears.`,
  ],
]
const N = ({ children }: PropsWithChildren<{}>) => (
  <span className="text-orange-500">{children}</span>
)
export const HanlibGlossingLanguage = () => (
  <CaptionedFigure
    caption={
      <>
        Using the Hanlib glossing language, it's possible to produce a
        word-for-word gloss (top) at the same time as a grammatical English
        translation (bottom). The <strong>numbers</strong> indicate deviations
        from Chinese word order, and the <strong>bracketed annotations</strong>{' '}
        indicate grammatical elements that are not present in the original
        Chinese text.
      </>
    }
    captionAlign="left"
    className="w-[500px] m-auto md:float-right md:ml-4"
  >
    <div className="mb-2">
      <ruby className="text-4xl">
        <span className="">楚</span>
        <rt className="pr-1 text-sm">Chu</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">人</span>
        <rt className="pr-1 text-sm">person</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">有</span>
        <rt className="pr-1 text-sm">be there</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">鬻</span>
        <rt className="pr-1 text-sm">sell</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">盾</span>
        <rt className="pr-1 text-sm">shield</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">與</span>
        <rt className="pr-1 text-sm">and</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">矛</span>
        <rt className="pr-1 text-sm">spear</rt>
      </ruby>
      <ruby className="text-4xl">
        <span className="">者</span>
        <rt className="pr-1 text-sm">one who</rt>
      </ruby>
    </div>
    <div className="mb-2">
      <pre className="whitespace-pre-wrap bg-slate-100 border-[1px] border-slate-600">
        Chu person, be_there sell shield and spear one_who.
      </pre>
      <div className="text-lg font-serif">
        Chu person, be there sell shield and spear one who.
      </div>
    </div>
    <div className="mb-2">
      <pre className="whitespace-pre-wrap bg-slate-100 border-[1px] border-slate-600">
        <N>2</N>Chu <N>1</N>person, be_there <N>2</N>sell <N>3</N>shield{' '}
        <N>4</N>and <N>5</N>spear <N>1</N>one_who.
      </pre>
      <div className="text-lg font-serif">
        person Chu, be there one who sell shield and spear.
      </div>
    </div>
    <div className="mb-2">
      <pre className="whitespace-pre-wrap bg-slate-100 border-[1px] border-slate-600">
        <N>[Among]</N> 2<N>[of]</N> Chu 1<N>[the]</N> person, be_there 2sell
        3shield 4and 5spear 1one_who.
      </pre>
      <div className="text-lg font-serif">
        <N>
          <i>Among the</i>
        </N>{' '}
        person{' '}
        <N>
          <i>of</i>
        </N>{' '}
        Chu, be there one who sell shield and spear.
      </div>
    </div>

    <div className="mb-2">
      <pre className="whitespace-pre-wrap bg-slate-100 border-[1px] border-slate-600">
        [Among] 2[of] Chu 1[the] people be_there<N>[:there_was]</N> 2sell
        <N>[:sold]</N> 3shield<N>[s]</N> 4and 5spear<N>[s]</N> 1one_who.
      </pre>
      <div className="text-lg font-serif">
        <i>Among the</i> <N>people</N> <i>of</i> Chu, <N>there was</N> one who{' '}
        <N>sold</N> shield<N>s</N> and spear<N>s</N>.
      </div>
    </div>
  </CaptionedFigure>
)

export const HanlibGlossEditingUi = () => (
  <CaptionedFigure
    className="w-[500px] md:float-left m-auto md:mr-4"
    captionAlign="left"
    href="https://justinsilvestre.github.io/hanlib/texts/brandt-ch01-1/source"
    caption={
      <>
        Using this gloss-editing UI, I've been glossing the texts from{' '}
        <i>Introduction to Literary Chinese</i> by J. Brandt. After this is
        done, the Hanlib will have a dictionary complete with a rich set of
        example sentences to help readers engage with more advanced texts.
      </>
    }
  >
    <ExportedImage
      src={hanlibGlossEditingUiPng}
      alt="A screenshot of the Hanlib gloss editing UI"
      width={700}
      height={700}
      className="shadow-xl mb-4"
    />
  </CaptionedFigure>
)
