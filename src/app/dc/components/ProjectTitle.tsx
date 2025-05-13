import { ReactNode } from 'react'
import { ExternalLink } from './ExternalLink'

export const ProjectTitle = ({
  title,
  year,
  links,
}: {
  title: ReactNode
  year: string
  links: { href: string; text: string; icon: ReactNode }[]
}) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 space-between mb-4">
      <div className="">
        <h1 className="">
          {title}
          <div className="text-3xl font-light">{year}</div>
        </h1>
      </div>
      <ul className="text-right flex-grow">
        {links.map((link) => (
          <li key={link.text} className=" m-3">
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
