import { AppProps } from 'next/app'
import 'normalize.css'
import './global.css'
function MyApp({ Component, pageProps } : AppProps) {
  
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
