import React, { useState } from 'react'
import cn from 'classnames'
import css from './index.module.scss'
import Layout from '../components/MainLayout'

const chairJpg = '/images/gallery/chair.jpg'
const chairThumbJpg = '/images/gallery/chairthumb.jpg'
const peachJpg = '/images/gallery/peach.jpg'
const peachThumbJpg = '/images/gallery/peachthumb.jpg'
const donutJpg = '/images/gallery/donut.jpg'
const donutThumbJpg = '/images/gallery/donutthumb.jpg'
const selfJpg = '/images/gallery/self.jpg'
const selfThumbJpg = '/images/gallery/selfthumb.jpg'
const sgScreenshotCompositeJpg = '/images/gallery/sgscreenshotcomposite.jpg'
const sgScreenshotCompositeThumbJpg = '/images/gallery/sgscreenshotcompositethumb.jpg'
const janCarrittScreenshotCompositeJpg = '/images/gallery/jancarrittscreenshotcomposite.jpg'
const janCarrittScreenshotCompositeThumbJpg = '/images/gallery/jancarrittscreenshotcompositethumb.jpg'
const kusamaThumbJpg = '/images/gallery/kusamathumb.jpg'
const pierThumbJpg = '/images/gallery/pierthumb.jpg'
const prospect1ThumbJpg = '/images/gallery/prospect1thumb.jpg'
const prospect2ThumbJpg = '/images/gallery/prospect2thumb.jpg'
const prospect3ThumbJpg = '/images/gallery/prospect3thumb.jpg'
const westvillageThumbJpg = '/images/gallery/westvillagethumb.jpg'
const harlemThumbJpg = '/images/gallery/harlemthumb.jpg'

const THUMBS = {
  chair: chairThumbJpg,
  kusama: kusamaThumbJpg,
  peach: peachThumbJpg,
  pier: pierThumbJpg,
  donut: donutThumbJpg,
  prospect1: prospect1ThumbJpg,
  prospect2: prospect2ThumbJpg,
  prospect3: prospect3ThumbJpg,
  westvillage: westvillageThumbJpg,
  harlem: harlemThumbJpg,
  self: selfThumbJpg,
  sgscreenshotcomposite: sgScreenshotCompositeThumbJpg,
  jancarrittscreenshotcomposite: janCarrittScreenshotCompositeThumbJpg,
}

const SKETCHBOOK = {
  chair: chairJpg,
  kusama:
    'http://38.media.tumblr.com/eebe6d74bd9ad18adea1ef71147536b9/tumblr_inline_n403lx9bQ61rf8kqg.jpg',
  peach: peachJpg,
  pier:
    'http://justinsilvestresketchbook.weebly.com/uploads/1/7/1/6/17166696/2530596_orig.jpg',
  donut: donutJpg,
  prospect1:
    'http://38.media.tumblr.com/75d0e9dae10e48674b2e4063fad62fa6/tumblr_inline_ml53vwzCIh1qz4rgp.jpg',
  prospect2:
    'http://33.media.tumblr.com/96d2ddb5d5d2d7e2c330c9c23f645344/tumblr_inline_ml53w3uKyR1qz4rgp.jpg',
  prospect3:
    'http://38.media.tumblr.com/f5f52ec689dd8cb87912b498bc34ab0f/tumblr_inline_ml53v1DrVz1qz4rgp.jpg',
  westvillage:
    'http://33.media.tumblr.com/2e95ed65925e705b6b7e9bc22f6ae82f/tumblr_inline_n403kgNuT51rf8kqg.jpg',
  harlem:
    'http://justinsilvestresketchbook.weebly.com/uploads/1/7/1/6/17166696/3659048_orig.jpg',
  self: selfJpg,
}

const WEB = {
  sgscreenshotcomposite: sgScreenshotCompositeJpg,
  jancarrittscreenshotcomposite: janCarrittScreenshotCompositeJpg,
}

const INITIAL_STATE = {
  coder: false,
  creative: false,
  cognoscente: false,
  taDah: false,
  active: null,
  image: null,
}
type State = {
  coder: boolean,
  creative: boolean,
  cognoscente: boolean,
  taDah: boolean,
  active: Header | null,
  image: string | null,
}
type Header = 'coder' | 'creative' | 'cognoscente'

function IndexPage() {
  const [state, setState] = useState<State>(INITIAL_STATE)
  const {
    coder,
    creative,
    cognoscente,
    active,
    image,
  } = state

  const transition = (key: Header) => () => {
    setState({
      ...state,
      [key]: true,
      active: key,
      taDah: false,
    })
  }

  const allClicked = coder && creative && cognoscente

  const reset = () => {
    if (allClicked) {
      setState({ ...INITIAL_STATE, taDah: true })
    }
  }

  const showImage = (image: string | null) => (event: any) => {
    event.preventDefault()
    setState({ ...state, image })
  }

  return (
    <Layout>
      <div className={css.container}>
        <div className={cn(css.bg1, { [css.bgActive]: coder })} />
        <div className={cn(css.bg2, { [css.bgActive]: creative })} />
        <div className={cn(css.bg3, { [css.bgActive]: cognoscente })} />

        <h1 className={cn(css.header, { [css.allClicked]: allClicked })} onClick={reset}>
          <span>Justin Silvestre</span>
          <small className={css.headerSmall}>Software Developer</small>
        </h1>

        <div className={css.assets}>
          <h2
            className={cn(css.technicalHeader, { [css.assetHeaderClicked]: coder })}
            onClick={transition('coder')}
          >
            code
          </h2>

          <section
            className={cn(css.details, {
              [css.detailsActive]: active === 'coder',
            })}
          >
            <p className={css.detailsP}>
              <a href="https://github.com/justinsilvestre/audio-flashcard-assistant">
                React,
              </a>{' '}
              <a href="http://tokipo.net">Redux,</a>{' '}
              <a href="https://justinsilvestre.gitbooks.io/unit-testing-in-atg/content/">
                Node
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/document/d/1ZdEm8Bn1Z-61WmZ1pq27CFos7-vgabrVJOiYX8odFcI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                more
              </a>
              .
            </p>
            <p className={css.detailsP}>
              Most recent gig: frontend and mobile at{' '}
              <a href="http://liefery.com">Liefery</a> in Berlin, Germany.
            </p>
          </section>

          <h2
            className={cn(css.creativeHeader, { [css.assetHeaderClicked]: creative })}
            onClick={transition('creative')}
          >
            craftsmanship
          </h2>

          <section
            className={cn(css.details, {
              [css.detailsActive]: active === 'creative',
            })}
          >
            <p className={css.detailsP}>I like making things to look at!</p>
            <p  className={css.detailsP}>Still finding my aesthetic.</p>
            <div className={css.gallery}>
              <h3>web</h3>
              {Object.entries(WEB).map(([name, image]) => (
                <a href={image} onClick={showImage(image)}>
                  <img className={css.galleryThumbnail} src={getThumbnailSrc(name)} alt="" />
                </a>
              ))}
              <h3>sketchbook</h3>
              {Object.entries(SKETCHBOOK).map(([name, image]) => (
                <a href={image} onClick={showImage(image)}>
                  <img className={css.galleryThumbnail} src={getThumbnailSrc(name)} alt="" />
                </a>
              ))}
            </div>
          </section>

          <h2
            className={cn(css.culturalHeader, { [css.assetHeaderClicked]: cognoscente })}
            onClick={transition('cognoscente')}
          >
            curiosity
          </h2>

          <section
            className={cn(css.details, {
              [css.detailsActive]: active === 'cognoscente',
            })}
          >
            <p  className={css.detailsP}>
              <b className={css.detailsBold}>Current mission</b>–to stop my compulsive classical Chinese
              studying from getting in the way of my goal of C1-level German.
            </p>
            <p  className={css.detailsP}>
              Here's{' '}
              <a href="https://www.youtube.com/watch?v=kFEfS8dyKQ8">
                something I built
              </a>{' '}
              to help me learn Chinese.
            </p>
          </section>
        </div>

        {image && (
          <div className={css.lightBox} onClick={showImage(null)}>
            <img className={css.lightBoxImg} src={image || undefined} />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage


function getThumbnailSrc(name: string): string | undefined {
  return THUMBS[name as keyof typeof THUMBS]
}