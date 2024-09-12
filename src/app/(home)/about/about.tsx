'use client'

import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import css from './about.module.css'

const pimpleGif = '/images/oldgifs/pimplelqsmall.gif'

export default function About() {
  const [{ flash }, setState] = useState({ flash: false })

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      if (window.stopRotatingSlowly) window.stopRotatingSlowly()
    }, 500)
  }, [])

  return (
    <section className={cn(css.container, 'my-0 mx-auto lg:pt-16')}>
      <h1 className={css.header}>About Justin</h1>

      <ul className={css.trajectory}>
        <li className={css.trajectoryLi}>
          <span className={css.trajectoryLocation}>
            <a className='underline' href="https://en.wikipedia.org/wiki/Bethlehem,_Pennsylvania">
              PA
            </a>
          </span>{' '}
          <span className={css.trajectoryYear}>1991</span>
        </li>{' '}
        <li className={css.trajectoryLiArrow}>→</li>
        <li className={css.trajectoryLi}>
          <span className={css.trajectoryLocation}>New York</span>{' '}
          <span className={css.trajectoryYear}>2010</span>
        </li>{' '}
        <li className={css.trajectoryLiArrow}>→</li>
        <li className={css.trajectoryLi}>
          <span className={css.trajectoryLocation}>Dallas</span>{' '}
          <span className={css.trajectoryYear}>2014</span>
        </li>{' '}
        <li className={css.trajectoryLiArrow}>→</li>
        <li className={css.trajectoryLi}>
          <span className={css.trajectoryLocation}>Berlin</span>{' '}
          <span className={css.trajectoryYear}>2017</span>
        </li>
      </ul>
      <p className={css.p}>
        Justin's life goal is to join <span className="font-bold">beauty</span> with <span className="font-bold">utility</span>. His experience writing software reaches back to childhood, when he made
        websites to showcase his artwork and{' '}
        <a
          className={css.flashLink}
          href="#flash"
          onClick={() => setState({ flash: true })}
        >
          experiments in Flash
        </a>
        .
        That creative bent has translated to a passion for expressiveness
        and sound craftsmanship in his code.
      </p>
      <p className={css.p}>
        Here are some things he's been working on recently:
      </p>
      <p className={css.p}>
        <a href="https://knowclip.com"><img src="/images/knowclip-screenshot.png" alt="" className=" shadow-lg shadow-black/65 mb-4" /></a>
        <a href="https://knowclip.com" className="underline font-bold">Knowclip</a> is a cross-platform desktop app for{' '}
        creating multimedia flashcards.
        Justin used it himself to learn Japanese, achieving the top N1 level on the  <a className="underline" href="https://en.wikipedia.org/wiki/Japanese-Language_Proficiency_Test">Japanese Language Proficiency Test</a>
        {' '}in July 2024.
      </p>
      <p className={css.p}>
        <a href="https://kanjisense.com"><img src="/images/kanjisense-screenshot.png" alt="" className=" shadow-lg shadow-black/65 mb-4" /></a>
        <a href="https://kanjisense.com" className="underline font-bold">Kanjisense</a> is a{' '}
        free online dictionary for learners of Japanese characters.
        It breaks down each of the approximately 3500 <i>kanji</i> characters needed for adult-level literacy in Japanese into their graphic components,
        {' '}explaining their forms and their origins, while also <span className="font-bold">illuminating the connections</span> between different characters.
      </p>
      <p className={css.p}>
        <a href="https://github.com/justinsilvestre/hanlib"><img src="/images/hanlib-screenshot.png" alt="" className=" shadow-lg shadow-black/65 mb-4" /></a>
        <a href="https://github.com/justinsilvestre/hanlib" className="underline font-bold">Hanlib</a> is a digital library of classical Chinese texts, powered
        by a special <i>domain-specific language</i>.
        For each text, one source code file is used to  <span className="font-bold">automatically generate an interactive Chinese&ndash;English gloss</span> at the same time as an idiomatic English translation.
        Currently a work in progress.
      </p>
      <div
        className={cn(css.flash, { [css.flashActive]: flash })}
        onClick={() => setState({ flash: false })}
      >
        <div>
          <img className={css.flashImage} src={pimpleGif} alt="" />
        </div>
      </div>
    </section>
  )

}