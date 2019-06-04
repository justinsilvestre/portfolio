import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import '../styles/styles.scss'

const Layout = ({ children, location }) => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Karla|Roboto:300,400&display=swap"
      rel="stylesheet"
    />
    <Helmet
      title="Justin Silvestre - Software Developer"
      meta={[
        {
          name: 'description',
          content:
            'Berlin-based software developer specializing in functional JavaScript.',
        },
      ]}
      bodyAttributes={{ id: location.pathname === '/' ? 'home' : 'about' }}
    />

    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
