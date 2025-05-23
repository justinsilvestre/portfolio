import ExportedImage from 'next-image-export-optimizer'
import { PropsWithChildren } from 'react'
import Icon from 'react-icons-kit'
import { github as githubIcon } from 'react-icons-kit/icomoon/github'
import { externalLink as externalLinkIcon } from 'react-icons-kit/fa/externalLink'
import kanjisenseRedBgJpeg from '../images/kanjisense-red-bg.jpeg'
import kanjisenseKusaBadgeJpeg from '../images/kanjisense-kusa-badge.jpeg'
import kanjisenseEntryScrolledPng from '@/app/dc/markdown/images/kanjisense-entry-scrolled.png'
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
import { ProjectTitle } from '../../components/ProjectTitle'

export const KanjisenseTitle = () => (
  <ProjectTitle
    className="clear-left md:clear-none"
    title={<div className="text-5xl text-orange-600">Kanjisense</div>}
    year="2023–present"
    links={[
      {
        href: 'https://kanjisense.com',
        text: 'Kanjisense website',
        icon: <Icon icon={externalLinkIcon} />,
      },
      {
        href: 'https://github.com/justinsilvestre/kanjisense',
        text: 'Source code on Github',
        icon: <Icon icon={githubIcon} />,
      },
    ]}
  />
)

export const KanjisenseScreenshot = () => (
  <CaptionedFigure
    className="float-left mr-6 w-full md:max-w-[40%] lg:max-w-[50%]"
    href="https://kanjisense.com/dict/青"
    caption="A Kanjisense dictionary entry, highlighting the character's graphical composition and its structural relationships with other characters."
  >
    <ExportedImage
      src={kanjisenseEntryScrolledPng}
      alt="A screenshot of a dictionary entry in the Kanjisense app"
      width={650}
      height={650}
      className="shadow-xl mb-4 object-cover"
    />
  </CaptionedFigure>
)

export const KanjisenseKanjiList = ({ chars }: { chars: string }) => {
  return <div>{chars}</div>
}

export const KanjisenseRedBg = () => (
  <CaptionedFigure
    className="w-[300px] m-auto md:float-right md:ml-4 "
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

const KanjisenseJinmeiyoLists = () => (
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

const KanjisenseKaikoEntry = () => (
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

export const KanjisenseBoldnessDemo = () => (
  <div className="flex flex-wrap gap-2 justify-evenly">
    <KanjisenseJinmeiyoLists />
    <KanjisenseKaikoEntry />
  </div>
)

export const KanjisenseAtomicComponentsList = () => (
  <CaptionedFigure
    className="float-left mr-4 md:w-[500px] md:max-w-[40%]"
    href="https://kanjisense.com/browse/atomic-components"
    caption='The 270 "atomic components" are the building blocks for thousands of kanji. Kanjisense users have the option to browse through lists like this one, but they are free to look up any character they wish, and to jump from character to character, too.'
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
