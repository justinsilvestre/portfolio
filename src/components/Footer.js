import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ location: { pathname } }) => {
  const strippedPathname = pathname.replace(/\//g, '')
  return (
    <footer>
      <ul>
        {strippedPathname !== '' && (
          <li>
            <Link to="/">home</Link>
          </li>
        )}
        {strippedPathname !== 'about' && (
          <li>
            <Link to="/about">about me</Link>
          </li>
        )}
        <li>
          <a id="twitter" href="http://twitter.com/justsilvestrein">
            <i class="fa fa-twitter" /> Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/justinsilvestre?tab=repositories">
            <i class="fa fa-github" /> Github
          </a>
        </li>
        <li>
          <a href="mailto:justinsilvestre@gmail.com">
            <i class="fa fa-envelope" /> justinsilvestre@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1ZdEm8Bn1Z-61WmZ1pq27CFos7-vgabrVJOiYX8odFcI/edit?usp=sharing"
            target="_blank"
          >
            CV
          </a>
        </li>
        {strippedPathname !== 'imprint' && (
          <li style={{ opacity: '0.3' }}>
            <Link to="/imprint">Impressum</Link>
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
