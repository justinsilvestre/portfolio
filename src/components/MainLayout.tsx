import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import Footer from './MainFooter'
import Boxes from '../app/(home)/Boxes'

const TITLE = 'Justin Silvestre - Software Developer'
const DESCRIPTION = 'Berlin-based software developer specializing in functional TypeScript.'


const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>
          Justin Silvestre - Software Developer
        </title>
        <meta name="title" content={DESCRIPTION} />
        <meta name="description" content={TITLE} />
      </Head>
      <Boxes className="w-full h-full fixed opacity-50 z-[0] top-0 left-0" />

      {children}
      < Footer />
    </>
  )
}
export default Layout
