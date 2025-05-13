import classNames from 'classnames'
import { PropsWithChildren, ReactNode } from 'react'
import Icon from 'react-icons-kit'
import { externalLink as externalLinkIcon } from 'react-icons-kit/fa/externalLink'
import { ExternalLink } from './ExternalLink'

export function CaptionedFigure({
  href = undefined,
  children,
  caption,
  className,
  captionAlign = 'right',
}: PropsWithChildren<{
  href?: string
  caption: ReactNode
  className?: string
  captionAlign?: 'left' | 'right' | 'center'
}>) {
  const figure = (
    <figure className="w-full relative">
      {children}
      <figcaption
        className={classNames(
          'text-sm w-full ',

          {
            'text-blue-500': href,
            'text-left': captionAlign === 'left',
            'text-right': captionAlign === 'right',
            'text-center': captionAlign === 'center',
          }
        )}
      >
        {caption}
        {href ? (
          <>
            {' '}
            <Icon icon={externalLinkIcon} />
          </>
        ) : null}
      </figcaption>
    </figure>
  )
  return href ? (
    <ExternalLink
      className={classNames(className, 'block mb-2 max-w-full')}
      href={href}
    >
      {figure}
    </ExternalLink>
  ) : (
    <div className={classNames(className, 'mb-2 max-w-full')}>{figure}</div>
  )
}
