import React from 'react'
import '../styles/reset.css'
import '../styles/global.scss'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import 'typeface-karla'
import 'typeface-roboto'

const Layout = ({ children, location }) => (
  <>
    <Helmet
      title="Justin Silvestre - Software Developer"
      meta={[
        {
          name: 'description',
          content:
            'Berlin-based software developer specializing in functional JavaScript.',
        },
      ]}
    />

    {children}
    <Footer location={location} />
  </>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
