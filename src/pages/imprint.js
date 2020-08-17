import React, { Component } from 'react'
import css from './imprint.module.css'

class ImprintPage extends Component {
  render() {
    return (
      <div className={css.imprint}>
        <h1 className={css.heading}>Impressum</h1>
        <section className={css.address}>
          <p>Justin Silvestre</p>
          <p>Reichenberger Str 143</p>
          <p>10999 Berlin, Deutschland</p>
        </section>
      </div>
    )
  }
}

export default ImprintPage
