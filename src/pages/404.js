import React from 'react'
import { Redirect } from '@reach/router'
import Index from './index'

const NotFoundPage = ({ ...props }) => {
  if (global.window) {
    window.location = '/'
  }

  return <Index {...props} />
}

export default NotFoundPage
