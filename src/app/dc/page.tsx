import Link from 'next/link'
import { Fragment } from 'react'

import 'tailwindcss/tailwind.css'

export default function DcPage() {
  return (
    <Fragment>
      <main className="p-4 grid lg:grid-rows-[minmax(1px,_auto)_1fr] lg:grid-cols-[450px_1fr] max-w-screen-xl m-auto gap-8">
        <div className="order-1 lg:col-[1] lg:row-[1] lg:pr-4">
          <h1 className="lg:text-left text-3xl mb-4">
            I'm Justin. Nice to meet you.
          </h1>
          <p className="text-xl lg:text-left mb-4">
            I'm a self-taught&nbsp;software&nbsp;developer
            based&nbsp;in&nbsp;Berlin.
          </p>

          <p className="text-xl lg:text-left">
            My interests include language education, philology, and
            accessibility.
          </p>
        </div>
        <div className="order-2 lg:order-1 lg:col-[1] lg:row-[2] lg:pr-4 pt-8 text-sm">
          <p className="mb-4">
            I've spent years focused on honing my craft of software development,
            both in my professional career and in personal projects like those
            shown here.
          </p>
          <p className="mb-4">
            My current goal is to dedicate myself full time to exploring the
            potential of software beyond the narrow scope of business problems.
          </p>
          <p className="mb-4">
            My specialty has been <strong>user interface development</strong>,
            including not just coding, but also project management and design.
            Hopefully, this selection of projects gives you a sense of my
            technical expertise, as well as my deep curiosity around questions
            surrounding <strong>language and culture</strong>.
          </p>
          <p className="mb-4">
            I believe that software is the most powerful medium available to us
            for building a more connected, more thoughtful society. Each of
            these projects represents ... By empowering people to learn new
            languages and engage with cultures from different places and
            different eras, I think...
          </p>
        </div>
        <ul className="order-1 flex flex-row flex-wrap gap-4 justify-center lg:order-2 lg:col-[2] lg:row-span-2">
          <Link
            href="/dc/knowclip"
            className="flex-1 basis-72 max-w-96 lg:basis-52 hover:text-red-800 transition-all group"
          >
            <li>
              <img
                className="w-full duration-[1s] h-auto mb-3 group-hover:shadow-red-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all"
                src="http://placecats.com/500/500"
                alt="Kitten"
              />
              <b className="group-hover:text-red-500 transition-colors">
                Knowclip
              </b>{' '}
              is a protest against the ephemerality of the modern web in the
              form of a free, cross-platform desktop app for learning languages
              through native video content.
            </li>
          </Link>
          <Link
            href="/dc/puluna"
            className="flex-1 basis-72 max-w-96 lg:basis-52 hover:text-purple-800 transition-all group"
          >
            <li>
              <img
                className="w-full duration-[1s] h-auto mb-3 group-hover:shadow-purple-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all"
                src="http://placecats.com/503/503"
                alt="Kitten"
              />
              <b className="group-hover:text-purple-500 transition-colors">
                Puluna
              </b>{' '}
              is an experiment in constructed language design that explores the
              limits of sound-symbolism, cultural neutrality, and accessibility.
            </li>
          </Link>
          <Link
            href="/dc/kanjisense"
            className="flex-1 basis-72 max-w-96 lg:basis-52 hover:text-orange-800 transition-all group"
          >
            <li>
              <img
                className="w-full duration-[1s] h-auto mb-3 group-hover:shadow-orange-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all"
                src="http://placecats.com/501/501/"
                alt="Kitten"
              />
              <b className="group-hover:text-orange-500 transition-colors">
                Kanjisense
              </b>{' '}
              is a graphic compass to orient learners of Japanese on the long
              journey of acquiring ~3500 Sino-Japanese characters.
            </li>
          </Link>
          <Link
            href="/dc/hanlib"
            className="flex-1 basis-72 max-w-96 lg:basis-52 hover:text-green-800 transition-all group"
          >
            <li>
              <img
                className="w-full duration-[1s] h-auto mb-3 group-hover:shadow-green-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all"
                src="http://placecats.com/502/502"
                alt="Kitten"
              />
              <b className="group-hover:text-green-500 transition-colors">
                Hanlib
              </b>{' '}
              makes classical Chinese texts accessible to English speakers
              through automatically generated interactive glosses powered by a
              new domain-specific language inspired by the Japanese glossing
              tradition of <i>kanbun kundoku</i>.
            </li>
          </Link>
          <Link
            href="/dc/kanji-through-kanshi"
            className="flex-1 basis-72 max-w-96 lg:basis-52 hover:text-blue-800 transition-all group"
          >
            <li className="">
              <img
                className="w-full duration-[1s] h-auto mb-3 group-hover:shadow-blue-300 group-hover:shadow-[0_0_12px_var(--tw-shadow-color)] transition-all"
                src="http://placecats.com/504/504"
                alt="Kitten"
              />
              <b className="group-hover:text-blue-500 transition-colors">
                Kanji through Kanshi
              </b>{' '}
              is the working title of a course that teaches Sino-Japanese
              characters through the medium of poems from the Tang dynasty, the
              "Golden Age" of Chinese poetry.
            </li>
          </Link>
        </ul>
      </main>
    </Fragment>
  )
}
