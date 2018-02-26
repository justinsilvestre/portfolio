import React, { Component } from 'react'
import cn from 'classnames'
import pimpleGif from '../images/oldgifs/pimplelqsmall.gif'

class About extends Component {
  state = {
    flash: false,
  }

  render() {
    const { flash } = this.state

    return (
      <div id="main-content">
        <h1>About Justin</h1>

        <ul id="trajectory">
        	<li><span><a href="https://en.wikipedia.org/wiki/Bethlehem,_Pennsylvania">PA</a></span> <span class="year">1991</span></li> <li>→</li>
        	<li><span>New York</span> <span class="year">2010</span></li> <li>→</li>
        	<li><span>Dallas</span> <span class="year">2014</span></li> <li>→</li>
        	<li><span>Berlin</span> <span class="year">2017</span></li>
        </ul>

        <p>Life goal: joining beauty with utility.</p>

        <p>Justin's experience reaches back to his childhood, when he made websites to showcase his artwork
          and <a id="flash-link" href="#flash" onClick={() => this.setState({ flash: true })}>experiments
            in Flash</a>. That creative bent has translated to a passion for expressiveness and sound
            craftsmanship in his code.</p>
        <div id="flash" className={cn({ flash })} onClick={() => this.setState({ flash: false })}>
        	<div>
        		<img src={pimpleGif} alt="" />
        	</div>
        </div>
      </div>
    )
  }
}

export default About
