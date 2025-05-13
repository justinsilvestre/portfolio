'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function FooterLink({
  href,
  className,
  title,
}: {
  href: string
  className?: string
  title: string
}) {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <li className="inline-block">
      <Link
        href={href}
        className={classNames(
          'rounded-md px-2 mx-1 hover:underline',
          className,
          {
            ['active']: isActive,
          }
        )}
      >
        {title}
      </Link>
    </li>
  )
}
