import React, { Component } from 'react'
import cn from 'classnames'
// import '../styles/home.scss'
import css from './index.module.css'
import chairJpg from '../images/gallery/chair.jpg'
import chairThumbJpg from '../images/gallery/chairthumb.jpg'
import peachJpg from '../images/gallery/peach.jpg'
import peachThumbJpg from '../images/gallery/peachthumb.jpg'
import donutJpg from '../images/gallery/donut.jpg'
import donutThumbJpg from '../images/gallery/donutthumb.jpg'
import selfJpg from '../images/gallery/self.jpg'
import selfThumbJpg from '../images/gallery/selfthumb.jpg'
import sgScreenshotCompositeJpg from '../images/gallery/sgscreenshotcomposite.jpg'
import sgScreenshotCompositeThumbJpg from '../images/gallery/sgscreenshotcompositethumb.jpg'
import janCarrittScreenshotCompositeJpg from '../images/gallery/jancarrittscreenshotcomposite.jpg'
import janCarrittScreenshotCompositeThumbJpg from '../images/gallery/jancarrittscreenshotcompositethumb.jpg'
import kusamaThumbJpg from '../images/gallery/kusamathumb.jpg'
import pierThumbJpg from '../images/gallery/pierthumb.jpg'
import prospect1ThumbJpg from '../images/gallery/prospect1thumb.jpg'
import prospect2ThumbJpg from '../images/gallery/prospect2thumb.jpg'
import prospect3ThumbJpg from '../images/gallery/prospect3thumb.jpg'
import westvillageThumbJpg from '../images/gallery/westvillagethumb.jpg'
import harlemThumbJpg from '../images/gallery/harlemthumb.jpg'

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
  allClicked: false,
  taDah: false,
  active: null,
  image: null,
}

class IndexPage extends Component {
  state = INITIAL_STATE

  transition = key => () => {
    const { coder, creative, cognoscente } = { ...this.state, [key]: true }
    this.setState({
      [key]: true,
      active: key,
      allClicked: coder && creative && cognoscente,
      taDah: false,
    })
  }

  reset = () => {
    const { allClicked } = this.state
    if (allClicked) {
      this.setState({ ...INITIAL_STATE, taDah: true })
    }
  }

  showImage = image => event => {
    event.preventDefault()
    this.setState({ image })
  }

  render() {
    const {
      coder,
      creative,
      cognoscente,
      allClicked,
      active,
      image,
    } = this.state
    const { location } = this.props

    return (
      <div className={css.container}>
        <div className={cn(css.bg1, { [css.bgActive]: coder })} />
        <div className={cn(css.bg2, { [css.bgActive]: creative })} />
        <div className={cn(css.bg3, { [css.bgActive]: cognoscente })} />

        <h1 className={cn(css.header, { [css.allClicked]: allClicked })} onClick={this.reset}>
          <span>Justin Silvestre</span>
          <small className={css.headerSmall}>Software Developer</small>
        </h1>

        <div className={css.assets}>
          <h2
            className={cn(css.technicalHeader, { [css.assetHeaderClicked]: coder })}
            onClick={this.transition('coder')}
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
              Currently doing frontend and mobile at{' '}
              <a href="http://liefery.com">Liefery</a> in Berlin, Germany.
            </p>
          </section>

          <h2
            className={cn(css.creativeHeader, { [css.assetHeaderClicked]: creative })}
            onClick={this.transition('creative')}
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
                <a href={image} onClick={this.showImage(image)}>
                  <img className={css.galleryThumbnail} src={THUMBS[name]} alt="" />
                </a>
              ))}
              <h3>sketchbook</h3>
              {Object.entries(SKETCHBOOK).map(([name, image]) => (
                <a href={image} onClick={this.showImage(image)}>
                  <img className={css.galleryThumbnail} src={THUMBS[name]} alt="" />
                </a>
              ))}
            </div>
          </section>

          <h2
            className={cn(css.culturalHeader, { [css.assetHeaderClicked]: cognoscente })}
            onClick={this.transition('cognoscente')}
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
          <div className={css.lightBox} onClick={this.showImage(null)}>
            <img className={css.lightBoxImg} src={image} />
          </div>
        )}
      </div>
    )
  }
}

export default IndexPage
