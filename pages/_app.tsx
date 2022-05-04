import { NextUIProvider } from '@nextui-org/react'
import { AppProps } from 'next/app'
import { darkTheme } from '../themes/darkTheme'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
  </NextUIProvider>
)

export default MyApp