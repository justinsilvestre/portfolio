import React, { Component, Fragment } from 'react'
import css from './imprint.module.scss'
import Layout from '../components/MainLayout'

class Imprint extends Component {
  render() {
    return (
      <Layout>
        <section className={css.container}>
          <h1 className={css.heading}>Impressum</h1>
          <p>justinsilvestre@gmail.com</p>
          <p>
            Justin Silvestre
            {process.env.IMPRESSUM_ADDRESS?.split(' / ').map((segment) => (
              <Fragment key={segment}>
                <br />
                {segment}
              </Fragment>
            ))}
          </p>
        </section>
      </Layout>
    )
  }
}

export default Imprint
