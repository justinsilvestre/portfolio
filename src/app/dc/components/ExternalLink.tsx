import classNames from 'classnames'
import { PropsWithChildren } from 'react'

export function ExternalLink({
  href,
  children,
  className,
  style,
}: PropsWithChildren<{
  href: string
  className?: string
  style?: React.CSSProperties
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={classNames('text-blue-500 hover:underline', className)}
    >
      {children}
    </a>
  )
}
