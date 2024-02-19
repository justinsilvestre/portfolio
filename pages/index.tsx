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
const sgScreenshotCompositeThumbJpg =
  '/images/gallery/sgscreenshotcompositethumb.jpg'
const janCarrittScreenshotCompositeJpg =
  '/images/gallery/jancarrittscreenshotcomposite.jpg'
const janCarrittScreenshotCompositeThumbJpg =
  '/images/gallery/jancarrittscreenshotcompositethumb.jpg'
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
  pier: 'http://justinsilvestresketchbook.weebly.com/uploads/1/7/1/6/17166696/2530596_orig.jpg',
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
  code: false,
  craftsmanship: false,
  curiosity: false,
  taDah: false,
  active: null,
  image: null,
}
type State = {
  code: boolean
  craftsmanship: boolean
  curiosity: boolean
  taDah: boolean
  active: Header | null
  image: string | null
}
type Header = 'code' | 'craftsmanship' | 'curiosity'

function IndexPage() {
  const [state, setState] = useState<State>(INITIAL_STATE)
  const { code, craftsmanship, curiosity, active, image } = state

  const transition = (key: Header) => () => {
    setState({
      ...state,
      [key]: true,
      active: key,
      taDah: false,
    })
  }

  const allClicked = code && craftsmanship && curiosity

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
        <div className={cn(css.bg1, { [css.bgActive]: code })} />
        <div className={cn(css.bg2, { [css.bgActive]: craftsmanship })} />
        <div className={cn(css.bg3, { [css.bgActive]: curiosity })} />

        <h1
          className={cn(css.header, { [css.allClicked]: allClicked })}
          onClick={reset}
        >
          <span>Justin Silvestre</span>
          <small className={css.headerSmall}>Software Developer</small>
        </h1>

        <div className={css.assets}>
          <h2
            className={cn(css.technicalHeader, {
              [css.assetHeaderClicked]: code,
            })}
            onClick={transition('code')}
          >
            code
          </h2>

          <section
            className={cn(css.details, {
              [css.detailsActive]: active === 'code',
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
              Check out my{' '}
              <a
                href="https://docs.google.com/document/d/1ZdEm8Bn1Z-61WmZ1pq27CFos7-vgabrVJOiYX8odFcI/edit?usp=sharing"
                target="_blank"
                className={css.link}
              >
                CV
              </a>
              .
            </p>
          </section>

          <h2
            className={cn(css.creativeHeader, {
              [css.assetHeaderClicked]: craftsmanship,
            })}
            onClick={transition('craftsmanship')}
          >
            craftsmanship
          </h2>

          <section
            className={cn(css.details, {
              [css.detailsActive]: active === 'craftsmanship',
            })}
          >
            <p className={css.detailsP}>I like making things to look at!</p>
            <p className={css.detailsP}>Still finding my aesthetic.</p>
            <div className={css.gallery}>
              <h3>web</h3>
              {Object.entries(WEB).map(([name, image]) => (
                <a href={image} onClick={showImage(image)}>
                  <img
                    className={css.galleryThumbnail}
                    src={getThumbnailSrc(name)}
                    alt=""
                  />
                </a>
              ))}
              <h3>sketchbook</h3>
              {Object.entries(SKETCHBOOK).map(([name, image]) => (
                <a href={image} onClick={showImage(image)}>
                  <img
                    className={css.galleryThumbnail}
                    src={getThumbnailSrc(name)}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </section>

          <h2
            className={cn(css.culturalHeader, {
              [css.assetHeaderClicked]: curiosity,
            })}
            onClick={transition('curiosity')}
          >
            curiosity
          </h2>

          <section
            className={cn(css.details, {
              [css.detailsActive]: active === 'curiosity',
            })}
          >
            <p className={css.detailsP}>
              Here's something I built{' '}
              <a
                className={css.link}
                href="https://www.youtube.com/watch?v=kFEfS8dyKQ8"
              >
                to help me learn classical Chinese
              </a>
              , which ended up morphing into a desktop app for learning any
              language with native videos.
            </p>
            <p className={css.detailsP}>
              Here's something else I built{' '}
              <a className={css.link} href="https://kanjisense.com">
                to help me learn Chinese/Japanese characters
              </a>
              . It's a complete mnemonic system disguised as a dictionary,
              complete with etymological data.
            </p>
          </section>
        </div>

        {image && (
          <div className={css.lightbox} onClick={showImage(null)}>
            <img className={css.lightboxImg} src={image || undefined} />
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
