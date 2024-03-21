import React, { Component, Fragment } from 'react'
import css from './imprint.module.scss'
import Layout from '../../components/MainLayout'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function Imprint({
  address,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps: GetStaticProps<{
  address: string
}> = async () => {
  const address = process.env.NEXT_IMPRESSUM_ADDRESS || ''
  return { props: { address } }
}
