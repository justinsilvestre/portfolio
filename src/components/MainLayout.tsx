import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Footer from './MainFooter'

const TITLE = 'Justin Silvestre - Software Developer'
const DESCRIPTION = 'Berlin-based software developer specializing in functional JavaScript.'

type Props = {
  children: ReactNode,
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>
          Justin Silvestre - Software Developer
        </title>
        <meta name="title" content={DESCRIPTION} />
        <meta name="description" content={TITLE} />
      </Head>
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
