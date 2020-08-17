import React from 'react'
import { Link } from 'gatsby'
import css from './Footer.module.css'
import cn from 'classnames'

const Footer = ({ location: { pathname } }) => {
  const strippedPathname = pathname.replace(/\//g, '')
  return (
    <footer className={cn(css.container, { [css.homeFooter]: strippedPathname })}>
      <ul>
        {strippedPathname !== '' && (
          <li className={css.navLi}>
            <Link to="/" className={css.link}>home</Link>
          </li>
        )}
        {strippedPathname !== 'about' && (
          <li className={css.navLi}>
            <Link to="/about" className={css.link}>about me</Link>
          </li>
        )}
        <li className={css.navLi}>
          <a className={css.twitterLink} href="http://twitter.com/justsilvestrein">
            <i className="fa fa-twitter" /> Twitter
          </a>
        </li>
        <li className={css.navLi}>
          <a href="https://github.com/justinsilvestre?tab=repositories" className={css.link}>
            <i className="fa fa-github" /> Github
          </a>
        </li>
        <li className={css.navLi}>
          <a href="mailto:justinsilvestre@gmail.com" className={css.link}>
            <i className="fa fa-envelope" /> justinsilvestre@gmail.com
          </a>
        </li>
        <li className={css.navLi}>
          <a
            href="https://docs.google.com/document/d/1ZdEm8Bn1Z-61WmZ1pq27CFos7-vgabrVJOiYX8odFcI/edit?usp=sharing"
            target="_blank"
            className={css.link}
          >
            CV
          </a>
        </li>
        {strippedPathname !== 'imprint' && (
          <li className={css.navLi} style={{ opacity: '0.3' }}>
            <Link to="/imprint" className={css.link}>Impressum</Link>
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
