import ExportedImage from 'next-image-export-optimizer'
import { PropsWithChildren } from 'react'
import Icon from 'react-icons-kit'
import { github as githubIcon } from 'react-icons-kit/icomoon/github'
import { externalLink as externalLinkIcon } from 'react-icons-kit/fa/externalLink'
import kanjisenseRedBgJpeg from '../images/kanjisense-red-bg.jpeg'
import kanjisenseKusaBadgeJpeg from '../images/kanjisense-kusa-badge.jpeg'
import kanjisenseKusakanmuriBadgeJpeg from '../images/kanjisense-kusakanmuri-badge.jpeg'
import kanjisenseHayaiBadgeJpeg from '../images/kanjisense-hayai-badge.jpeg'
import kanjisenseYasumuEntryTopCompactPng from '../images/kanjisense-yasumu-entry-top-compact.png'
import kanjisenseNinbenEntryTopPng from '../images/kanjisense-ninben-entry-top.png'
import kanjisenseJinmeiyoListTopJpeg from '../images/kanjisense-jinmeiyo-list-top.jpeg'
import kanjisenseJinmeiyoListBottomJpeg from '../images/kanjisense-jinmeiyo-list-bottom.jpeg'
import kanjisenseAtomicComponentsJpeg from '../images/kanjisense-atomic-components.jpeg'
import kanjisenseKaikoEntryTopCompactPng from '../images/kanjisense-kaiko-entry-top-compact.png'

import { CaptionedFigure } from '../../components/CaptionedFigure'
import { ExternalLink } from '../../components/ExternalLink'

export const KanjisenseTitle = () => (
  <div className=" flex-row flex-wrap gap-4 justify-center mb-4">
    <div className="">
      <h1 className="text-5xl">
        <span className=" text-orange-600">Kanjisense</span>
        <br />
        <span className="text-3xl font-light">2023&ndash;present</span>
      </h1>
      <ul>
        <li className="inline-block m-1">
          <ExternalLink href="https://kanjisense.com">
            <Icon icon={externalLinkIcon} /> Kanjisense website
          </ExternalLink>
        </li>
        <li className="inline-block m-1">
          <ExternalLink href="https://github.com/justinsilvestre/kanjisense">
            <Icon icon={githubIcon} /> Source code on Github
          </ExternalLink>
        </li>
      </ul>
    </div>
  </div>
)

export const KanjisenseKanjiList = ({ chars }: { chars: string }) => {
  return <div>{chars}</div>
}

export const KanjisenseRedBg = () => (
  <CaptionedFigure
    className="w-[300px] float-right ml-4 lg:float:right"
    href="https://kanjisense.com/browse/characters"
    caption="Users are free to explore the relationships between the 3500 most important kanji and their graphic components."
  >
    <ExportedImage
      src={kanjisenseRedBgJpeg}
      alt="Kanjisense"
      width={300}
      height={300}
      className="shadow-xl mb-4"
    />
  </CaptionedFigure>
)

export const KanjisenseBadges = () => (
  <div className="flex flex-wrap gap-2">
    <div className="relative w-[300px] h-[300px]">
      <ExportedImage
        src={kanjisenseKusaBadgeJpeg}
        alt=""
        // 383 × 496
        fill
        className="object-contain"
      />
    </div>
    <div className="relative w-[300px] h-[300px]">
      <ExportedImage
        src={kanjisenseKusakanmuriBadgeJpeg}
        alt=""
        // 383 × 496
        fill
        className="object-contain"
      />
    </div>
    <div className="relative w-[300px] h-[300px]">
      <ExportedImage
        src={kanjisenseHayaiBadgeJpeg}
        alt=""
        // 383 × 496
        fill
        className="object-contain"
      />
    </div>
  </div>
)

export const KanjisenseUiStructureElements = () => (
  <div className="flex flex-wrap gap-2 justify-center">
    <CaptionedFigure
      className="w-[40%] min-w-200px lg:w-[500px]"
      captionAlign="left"
      href="https://kanjisense.com/dict/休"
      caption='The entry for 休 "to rest" shows how it breaks down into left and right components.'
    >
      <ExportedImage
        src={kanjisenseYasumuEntryTopCompactPng}
        alt="A screenshot of a dictionary entry in the Kanjisense app"
        width={500}
        height={500}
        className="shadow-xl mb-4"
      />
    </CaptionedFigure>
    <CaptionedFigure
      className="w-[40%] min-w-200px lg:w-[500px]"
      captionAlign="left"
      href="https://kanjisense.com/dict/亻"
      caption="Components like 亻 can be used in many different characters, which in turn can serve as components in other characters."
    >
      <ExportedImage
        src={kanjisenseNinbenEntryTopPng}
        alt="A screenshot of a dictionary entry in the Kanjisense app"
        width={500}
        height={500}
        className="shadow-xl mb-4"
      />
    </CaptionedFigure>
  </div>
)

export const KanjisenseJinmeiyoLists = () => (
  <div className="">
    <CaptionedFigure
      className="w-[400px]"
      captionAlign="left"
      caption={
        <>
          Characters in red{' '}
          <ExternalLink href="https://kanjisense.com/browse/characters">
            from the Name-Use-Kanji list
          </ExternalLink>{' '}
          usually don't appear as standalone kanji in everyday modern Japanese,
          but some of them are extremely common as components in other kanji.
          They are marked in <strong>a bold color</strong> to signal their high
          frequency of use.
        </>
      }
    >
      <BottomFadeGradient>
        <ExportedImage
          src={kanjisenseJinmeiyoListTopJpeg}
          alt="A screenshot of a dictionary entry in the Kanjisense app"
          width={400}
          height={400}
          className="mb-4"
        />
      </BottomFadeGradient>
    </CaptionedFigure>
    <CaptionedFigure
      className="w-[400px]"
      captionAlign="left"
      caption={
        <>
          The <b>lighter red</b> of the rarest characters in the Name-Use-Kanji
          list signals that it's OK for beginners to focus their attention
          somewhere else. They can also see from the square shapes that these
          characters aren't used as components in other kanji, as well.
        </>
      }
    >
      <TopFadeGradient>
        <ExportedImage
          src={kanjisenseJinmeiyoListBottomJpeg}
          alt="A screenshot of a dictionary entry in the Kanjisense app"
          width={400}
          height={400}
          className="mb-4"
        />
      </TopFadeGradient>
    </CaptionedFigure>
  </div>
)

// 蚕
export const KanjisenseKaikoEntry = () => (
  <CaptionedFigure
    className="w-[400px]"
    captionAlign="left"
    caption={
      <>
        Students may encounter{' '}
        <ExternalLink href="https://kanjisense.com/dict/蚕">
          蚕 "silkworm"
        </ExternalLink>{' '}
        in elementary-school level kanji lists. But it isn't very commonly used,
        so it's marked in Kanjisense with a <b>lighter</b> color than usual.
      </>
    }
  >
    <ExportedImage
      src={kanjisenseKaikoEntryTopCompactPng}
      alt="A screenshot of a dictionary entry in the Kanjisense app"
      width={400}
      height={400}
      className="shadow-xl mb-4"
    />
  </CaptionedFigure>
)

export const KanjisenseAtomicComponentsList = () => (
  <CaptionedFigure
    className="float-left mr-4 md:w-[500px] md:max-w-[40%]"
    href="https://kanjisense.com/browse/atomic-components"
    caption='The 270 "atomic components" are the building blocks for thousands of kanji. Kanjisense have the option to browse through lists like this one, but they are free to look up any character they wish, and to jump from character to character, too.'
  >
    <ExportedImage
      src={kanjisenseAtomicComponentsJpeg}
      alt="A screenshot of a dictionary entry in the Kanjisense app"
      width={0}
      height={0}
      // fill
      className="shadow-xl mb-4 object-contain w-full h-auto"
    />
  </CaptionedFigure>
)

function BottomFadeGradient({ children }: PropsWithChildren<{}>) {
  return (
    <div className="relative">
      <div className="relative">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-b to-white from-transparent" />
    </div>
  )
}

function TopFadeGradient({ children }: PropsWithChildren<{}>) {
  return (
    <div className="relative">
      <div className="relative">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
    </div>
  )
}
