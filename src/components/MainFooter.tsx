'use client'
import React from 'react'
import css from './MainFooter.module.css'
import cn from 'classnames'
import Icon_ from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
import { twitter } from 'react-icons-kit/icomoon/twitter'
import { mail } from 'react-icons-kit/icomoon/mail'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Icon({ icon }: { icon: string }) {
  return (
    <span className={css.iconWrapper}>
      <Icon_ icon={icon} size={20} />
    </span>
  )
}

const Footer = () => {
  const pathname = usePathname()
  const strippedPathname = pathname.replace(/\//g, '')
  return (
    <footer
      className={cn(css.container, {
        [css.homeFooter]: strippedPathname === '',
        [css.aboutFooter]: strippedPathname === 'about',
      })}
    >
      <ul>
        {strippedPathname !== '' && (
          <li className={css.navLi}>
            <Link legacyBehavior passHref href="/">
              <a className={css.link}>home</a>
            </Link>
          </li>
        )}
        {strippedPathname !== 'about' && (
          <li className={css.navLi}>
            <Link legacyBehavior passHref href="/about">
              <a className={css.link}>about me</a>
            </Link>
          </li>
        )}
        <li className={css.navLi}>
          <a
            className={css.twitterLink}
            href="http://twitter.com/justsilvestrein"
          >
            <Icon icon={twitter} /> Twitter
          </a>
        </li>
        <li className={css.navLi}>
          <a
            href="https://github.com/justinsilvestre?tab=repositories"
            className={css.link}
          >
            <Icon icon={github} /> Github
          </a>
        </li>
        <li className={css.navLi}>
          <a href="mailto:justinsilvestre@gmail.com" className={css.link}>
            <Icon icon={mail} /> justinsilvestre@gmail.com
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
            <Link legacyBehavior passHref href="/imprint">
              <a className={css.link}>Impressum</a>
            </Link>
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
