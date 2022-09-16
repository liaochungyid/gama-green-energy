import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'theme'
import GlobalStyle from 'theme/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <CssBaseline />
      {GlobalStyle}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
