'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import css from './about.module.css'
import Layout from '../../components/MainLayout'

const pimpleGif = '/images/oldgifs/pimplelqsmall.gif'

export function About() {
  const [{ flash }, setState] = useState({ flash: false })
  return (
    <Layout>
      <section className={css.container}>
        <h1 className={css.header}>About Justin</h1>

        <ul className={css.trajectory}>
          <li className={css.trajectoryLi}>
            <span className={css.trajectoryLocation}>
              <a href="https://en.wikipedia.org/wiki/Bethlehem,_Pennsylvania">
                PA
              </a>
            </span>{' '}
            <span className={css.trajectoryYear}>1991</span>
          </li>{' '}
          <li className={css.trajectoryLi}>→</li>
          <li className={css.trajectoryLi}>
            <span className={css.trajectoryLocation}>New York</span>{' '}
            <span className={css.trajectoryYear}>2010</span>
          </li>{' '}
          <li className={css.trajectoryLi}>→</li>
          <li className={css.trajectoryLi}>
            <span className={css.trajectoryLocation}>Dallas</span>{' '}
            <span className={css.trajectoryYear}>2014</span>
          </li>{' '}
          <li className={css.trajectoryLi}>→</li>
          <li className={css.trajectoryLi}>
            <span className={css.trajectoryLocation}>Berlin</span>{' '}
            <span className={css.trajectoryYear}>2017</span>
          </li>
        </ul>

        <p className={css.p}>Life goal: joining beauty with utility.</p>

        <p className={css.p}>
          Justin's experience reaches back to his childhood, when he made
          websites to showcase his artwork and{' '}
          <a
            className={css.flashLink}
            href="#flash"
            onClick={() => setState({ flash: true })}
          >
            experiments in Flash
          </a>
          . That creative bent has translated to a passion for expressiveness
          and sound craftsmanship in his code.
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
    </Layout>
  )
}

export default About
