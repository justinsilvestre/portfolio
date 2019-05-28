import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/styles.scss'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Karla|Roboto:300,400&display=swap"
      rel="stylesheet"
    />
    <Helmet
      title="Justin Silvestre - Web Developer"
      meta={[
        {
          name: 'description',
          content:
            'Berlin-based web developer specializing in functional frontend code.',
        },
      ]}
      bodyAttributes={{ id: location.pathname === '/' ? 'home' : 'about' }}
    />

    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper