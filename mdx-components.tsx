import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (props) => <p className="mb-4" {...props} />,
    h1: (props) => <h1 className="text-4xl mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl mb-4" {...props} />,
  }
}
