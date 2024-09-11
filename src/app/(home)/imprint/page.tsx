import React, { Component, Fragment } from 'react'
import css from './imprint.module.scss'
import Layout from '../../../components/MainLayout'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function Imprint() {
  const address = process.env.GHP_IMPRESSUM_ADDRESS || ''
  return (
    <Layout>
      <section className={css.container}>
        <h1 className={css.heading}>Impressum</h1>
        <p>justinsilvestre@gmail.com</p>
        <p>
          Justin Silvestre
          {address.split(' / ').map((segment) => (
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
