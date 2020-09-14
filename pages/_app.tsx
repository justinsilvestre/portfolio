import { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/global.scss'
import '../styles/index.css'
import 'typeface-karla'
import 'typeface-roboto'
import { initAnalytics } from '@pinjollist/next-with-analytics';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

const options = {
  trackingCode: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID,
  respectDNT: true,
  anonymizeIp: true,
};

const analyticsInstance = initAnalytics(options);

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const { handleRouteChange } = analyticsInstance;
  
      // Enable tracking page views for route change
      router.events.on('routeChangeComplete', handleRouteChange);
  
       // Disable tracking page views for route change before unmount
      return () => router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [])
  
  return <Component {...pageProps} />
}
