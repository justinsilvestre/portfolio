import React, { Component } from 'react'
import cn from 'classnames'
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
    const { coder, creative, cognoscente, allClicked } = this.state
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
      taDah,
      image,
    } = this.state

    return (
      <div id="main-content">
        <div
          id="bg1"
          className={cn('bg', { active: active == 'coder' || taDah })}
        />
        <div
          id="bg2"
          className={cn('bg', { active: active == 'creative' || taDah })}
        />
        <div
          id="bg3"
          className={cn('bg', { active: active == 'cognoscente' || taDah })}
        />

        <h1 className={cn({ 'all-clicked': allClicked })} onClick={this.reset}>
          <span id="my-name">Justin Silvestre</span>
          <small>Web Developer</small>
        </h1>

        <div id="assets">
          <h2
            className={cn('technical', { clicked: coder })}
            onClick={this.transition('coder')}
          >
            functional code
          </h2>

          <section
            className={cn('technical', 'details', {
              active: active === 'coder',
            })}
          >
            <p>
              <a href="http://tokipo.net">React.js,</a>{' '}
              <a href="https://www.gitbook.com/book/justinsilvestre/unit-testing-in-atg/details">
                Node.js
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/document/d/1ZdEm8Bn1Z-61WmZ1pq27CFos7-vgabrVJOiYX8odFcI/edit?usp=sharing"
                target="_blank"
              >
                more
              </a>
              .
            </p>
            <p>
              Currently doing frontend and mobile at{' '}
              <a href="http://liefery.com">Liefery</a> in Berlin, Germany.
            </p>
          </section>

          <h2
            className={cn('creative', { clicked: creative })}
            onClick={this.transition('creative')}
          >
            craftsmanship
          </h2>

          <section
            className={cn('creative', 'details', {
              active: active === 'creative',
            })}
          >
            <p>I like making things to look at!</p>
            <p>Still finding my aesthetic.</p>
            <div id="gallery">
              <h3>web</h3>
              {Object.entries(WEB).map(([name, image]) => (
                <a href={image} onClick={this.showImage(image)}>
                  <img className="thumbnail" src={THUMBS[name]} alt="" />
                </a>
              ))}
              <h3>sketchbook</h3>
              {Object.entries(SKETCHBOOK).map(([name, image]) => (
                <a href={image} onClick={this.showImage(image)}>
                  <img className="thumbnail" src={THUMBS[name]} alt="" />
                </a>
              ))}
            </div>
          </section>

          <h2
            className={cn('cultural', { clicked: cognoscente })}
            onClick={this.transition('cognoscente')}
          >
            curiosity
          </h2>

          <section
            className={cn('cultural', 'details', {
              active: active === 'cognoscente',
            })}
          >
            <p>
              <b>Current mission</b>–to stop my compulsive classical Chinese
              studying from getting in the way of my goal of C2-level German.
            </p>
            <p>
              Here's{' '}
              <a href="https://github.com/justinsilvestre/audio-flashcard-assistant">
                something I built
              </a>{' '}
              to help me learn Chinese.
            </p>
          </section>
        </div>

        {image && (
          <div id="lightbox" onClick={this.showImage(null)}>
            <img src={image} />
          </div>
        )}
      </div>
    )
  }
}

export default IndexPage
