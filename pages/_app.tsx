import { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/global.scss'
import '../styles/index.css'
import 'typeface-karla'
import 'typeface-roboto'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
