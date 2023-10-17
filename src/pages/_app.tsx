import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ViewTransition from '@/components/ViewTransition'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ViewTransition>
      <Component {...pageProps} />
    </ViewTransition>
  )
}
