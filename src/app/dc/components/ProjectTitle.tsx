import { ReactNode } from 'react'
import { ExternalLink } from './ExternalLink'
import classNames from 'classnames'

export const ProjectTitle = ({
  title,
  year,
  links,
  className,
}: {
  title: ReactNode
  year: string
  links: { href: string; text: string; icon: ReactNode }[]
  className?: string
}) => {
  return (
    <div
      className={classNames(
        'flex flex-row flex-wrap gap-4 space-between mb-4',
        className
      )}
    >
      <div className="">
        <h1 className="">
          {title}
          <div className="text-3xl font-light mt-2">{year}</div>
        </h1>
      </div>
      <ul className="text-right flex-grow self-end">
        {links.map((link) => (
          <li key={link.text} className="m-2">
            <ExternalLink href={link.href}>
              {link.text}
              {link.icon ? <> {link.icon}</> : null}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
