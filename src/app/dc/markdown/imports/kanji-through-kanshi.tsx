import ExportedImage from 'next-image-export-optimizer'
import { CaptionedFigure } from '../../components/CaptionedFigure'
import { ProjectTitle } from '../../components/ProjectTitle'
import kanjiThroughKanshiTsuitaJpg from '../../markdown/images/kanji-through-kanshi-tsuita.jpeg'
import kanjiThroughKanshiCuratorPng from '../../markdown/images/kanji-through-kanshi-curator.png'

export const KanjiThroughKanshiTitle = () => (
  <ProjectTitle
    title={
      <div className="text-8xl mb-4  text-blue-600">Kanji through Kanshi</div>
    }
    year="2020–present"
    links={[]}
  />
)

const poem = [
  ['遺文三十軸', 'leave_behind text three ten scroll'],
  ['軸軸金玉聲', 'scroll scroll gold jade voice'],
  ['龍門原上土', 'dragon gate field top earth'],
  ['埋骨不埋名', 'bury bone not bury name'],
].map(([chinese, english]) => {
  const englishGlosses = english.split(' ')
  const glossed: { chinese: string; english: string }[] = []
  for (let i = 0; i < chinese.length; i++) {
    glossed.push({
      chinese: chinese[i],
      english: englishGlosses[i].replace(/_/g, ' '),
    })
  }
  return glossed
})

export const KanjiThroughKanshiGlossedPoem = () => (
  <CaptionedFigure className="mb-2 w-full" caption={<> </>} captionAlign="left">
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center w-full">
      <div className="min-w-[400px]">
        {poem.map((line, i) => (
          <div key={i} className="">
            {line.map(({ chinese, english }) => (
              <ruby key={String(i)} className="text-7xl">
                <span className="font-serif ">{chinese}</span>
                <rt className="pr-1 text-xs">{english}</rt>
              </ruby>
            ))}
          </div>
        ))}
      </div>
      <div>
        <p className="leading-10 ml-4 -indent-4">
          The writings you left us are thirty scrolls.
        </p>
        <p className="leading-10 ml-4 -indent-4">
          In scroll after scroll, your voice of gold and jade.
        </p>
        <p className="leading-10 ml-4 -indent-4">
          In the earth of the fields at Dragon Gate,
        </p>
        <p className="leading-10 ml-4 -indent-4">
          They've buried your bones&mdash;but buried not your name.
        </p>
      </div>
    </div>
  </CaptionedFigure>
)

export const KanjiThroughKanshiTsuita = () => (
  <CaptionedFigure
    className="w-[300px] md:float-left m-auto md:mr-4"
    caption={
      <>
        Written only in Chinese characters, "pseudo-Chinese" is neither Chinese
        nor Japanese, but something in between. On the social network{' '}
        <i>Tsuita</i>, it has become a game for Japanese-speakers to create
        uncannily comprehensible kanji-only sentences.
      </>
    }
    captionAlign="left"
  >
    <ExportedImage
      className="w-full duration-[1s] h-full mb-3 group-hover:shadow-orange-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all shadow-lg"
      src={kanjiThroughKanshiTsuitaJpg}
      alt="Kanji Through Kanshi"
      width={500}
      height={500}
    />
  </CaptionedFigure>
)

export const KanjiThroughKanshiCurator = () => (
  <CaptionedFigure
    className="w-[800px] float-left mr-4"
    caption={
      <>
        Using this <b>poem-curation application</b> (currently not public), I
        have been selecting poems for the course from a corpus of more than
        49,000 texts from the <i>Complete Tang Poems</i> and other classic
        poetry anthologies. It allows me to filter and sort poems by criteria
        such as <b>graphic complexity</b> of a text and{' '}
        <b>usage frequency of characters</b> in the text, and to arrange
        selected poems into thematic groups while{' '}
        <b>monitoring the progression rate</b> from lesson to lesson.
      </>
    }
    captionAlign="left"
  >
    <ExportedImage
      className="w-full duration-[1s] h-full mb-3 group-hover:shadow-orange-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all shadow-lg"
      src={kanjiThroughKanshiCuratorPng}
      alt="Kanji Through Kanshi Curator"
      width={500}
      height={500}
    />
  </CaptionedFigure>
)
