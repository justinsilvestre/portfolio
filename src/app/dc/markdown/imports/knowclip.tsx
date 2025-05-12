import ExportedImage from 'next-image-export-optimizer'
import { CaptionedFigure } from '../../components/CaptionedFigure'
import knowclipHomepageScreenshotPng from '../../markdown/images/knowclip-homepage-screenshot.png'
import knowclipYoutubeDlArticleScreenshotPng from '../../markdown/images/knowclip-youtube-dl-article-screenshot.png'
import knowclipDictionaryPopoverCaptureGif from '../../markdown/images/knowclip-dictionary-popover-capture-lq.gif'
import knowclipAnkiScreenshotPng from '../../markdown/images/knowclip-anki-screenshot.png'
import knowclipDependenciesScreenshotJpg from '../../markdown/images/knowclip-dependencies-screenshot-small.jpg'
import { github as githubIcon } from 'react-icons-kit/icomoon/github'
import { externalLink as externalLinkIcon } from 'react-icons-kit/fa/externalLink'
import Icon from 'react-icons-kit'
import { ProjectTitle } from '../../components/ProjectTitle'

export const KnowclipTitle = () => (
  <ProjectTitle
    title={
      <>
        <span className=" text-red-600">Knowclip</span>
      </>
    }
    year="2019–present"
    links={[
      {
        href: 'https://knowclip.com',
        text: 'Knowclip homepage',
        icon: <Icon icon={externalLinkIcon} />,
      },
      {
        href: 'https://github.com/knowclip/knowclip',
        text: 'Source code on Github',
        icon: <Icon icon={githubIcon} />,
      },
    ]}
  />
)

export const KnowclipHomepageScreenshot = () => (
  <CaptionedFigure
    className="float-right ml-4 w-full md:max-w-[40%] lg:max-w-[50%]"
    href="https://knowclip.com/"
    caption="The Knowclip homepage, with a demo video showcasing the app's interface and main features."
  >
    <ExportedImage
      src={knowclipHomepageScreenshotPng}
      alt="A screenshot of the Knowclip homepage"
      width={600}
      height={600}
      className="shadow-xl mb-4 object-cover"
    />
  </CaptionedFigure>
)

export const YoutubeDlTakedownLink = () => (
  <CaptionedFigure
    className="float-right ml-4 w-full md:max-w-[20%] lg:max-w-[30%]"
    caption="Even using legal means to bypass the major platforms for video distribution is risky when it goes against the interests of powerful corporations, as shown in the case of the 'youtube-dl' library. To rely on tools like this would mean to put at risk the stability of Knowclip's user experience."
    href="https://github.blog/news-insights/policy-news-and-insights/standing-up-for-developers-youtube-dl-is-back/"
  >
    <ExportedImage
      src={knowclipYoutubeDlArticleScreenshotPng}
      alt="A screenshot of an article explaining the story of the takedown of youtube-dl, a popular open-source tool for downloading videos from YouTube and other platforms."
      width={600}
      height={600}
      className="shadow-xl mb-4 object-cover"
    />
  </CaptionedFigure>
)

export const KnowclipUiCapture = () => (
  <>
    <CaptionedFigure
      className="w-[300px] float-left mr-4"
      caption={
        <>
          While watching a subtitled video in Knowclip, users can instantly look
          up unknown words and create rich media flashcards for use in Anki.
        </>
      }
      captionAlign="left"
    >
      <ExportedImage
        src={knowclipDictionaryPopoverCaptureGif}
        alt="A screen capture of the Knowclip user interface"
        width={300}
        height={300}
        className="shadow-xl mb-4"
      />
    </CaptionedFigure>
    <CaptionedFigure
      className="w-[200px] float-left mr-4"
      caption={
        <>
          After exporting the flashcard deck, users can use it on desktop, web,
          and mobile using Anki, the free, open-source spaced-repetition
          software.
        </>
      }
      captionAlign="left"
    >
      <ExportedImage
        src={knowclipAnkiScreenshotPng}
        alt="A screenshot of a Knowclip flashcard from within the Anki desktop app"
        width={300}
        height={300}
        className="shadow-xl mb-4"
      />
    </CaptionedFigure>
  </>
)

export const KnowclipDependenciesScreenshot = () => (
  <CaptionedFigure
    className="w-[600px] float-right ml-4"
    caption={
      <>
        Pictured is a list of all the third-party libraries that Knowclip
        depends on, their own dependencies, and so on. As the cost of a modern
        user experience, user interfaces built in modern JavaScript frameworks
        typically have large dependency trees like this.
      </>
    }
    captionAlign="left"
    href="https://github.com/knowclip/knowclip/network/dependencies"
  >
    <ExportedImage
      src={knowclipDependenciesScreenshotJpg}
      alt="The dependency graph of Knowclip, showing the various libraries and packages it depends on."
      width={600}
      height={600}
      className="shadow-xl mb-4"
    />
  </CaptionedFigure>
)
