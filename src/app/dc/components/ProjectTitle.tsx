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
    <div className=" flex-row flex-wrap gap-4 justify-center mb-4">
      <div className="">
        <h1 className="text-5xl">
          {title}
          <br />
          <span className="text-3xl font-light">{year}</span>
        </h1>
        <ul>
          {links.map((link) => (
            <li key={link.text} className="inline-block m-1">
              <ExternalLink href={link.href}>
                {link.text}
                {link.icon ? <> {link.icon}</> : null}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
