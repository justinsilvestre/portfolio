import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (props) => <p className="mb-4" {...props} />,
    h1: (props) => <h1 className="text-4xl mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl mb-4" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 pl-4 ml-4 italic my-4 text-blue"
        {...props}
      />
    ),
    ul: (props) => <ul className="list-disc mb-4 ml-4" {...props} />,
    li: (props) => <li className="mb-2 list-item" {...props} />,
    a: (props) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline hover:no-underline"
        {...props}
      />
    ),
  }
}
