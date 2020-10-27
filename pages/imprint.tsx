import React, { Component } from 'react'
import css from './imprint.module.scss'
import Layout from '../components/MainLayout'

class Imprint extends Component {
  render() {

    return (
      <Layout>
        <section className={css.container}>
          <h1 className={css.heading}>Impressum</h1>
          <p>
            justinsilvestre@gmail.com
          </p>
          <p>
            Justin Silvestre<br />
            c/o RA Matutis<br />
            Berliner Straße 57<br />
            14467 Potsdam<br />
          </p>
        </section>
      </Layout>
    )
  }
}

export default Imprint
