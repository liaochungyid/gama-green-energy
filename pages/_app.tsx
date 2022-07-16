import { CssBaseline, ThemeProvider } from '@mui/material'
import { prefix } from '@utils/prefix'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gama Green Engergy</title>
        <meta name="description" content="Empowering Green Energy Technology" />
        <meta name="author" content="FE Lyle, DESIGN Chloe" />
        {/* <meta name="generator" content="" /> */}
        <meta property="og:url" content="index.html" />
        <meta property="og:site_name" content="Gama Green Energy" />
        <meta property="og:title" content="Gama Green Energy" />
        <meta property="og:description" content="Empowering Green Energy Technology" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${prefix}/images/leaf.jpg`} />
        <meta property="og:locale" content="zh_tw" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Gama Green Energy" />
        <meta name="twitter:description" content="Empowering Green Energy Technology" />
        <meta name="twitter:image" content={`${prefix}/images/leaf.jpg`} />
        <meta name="twitter:image:alt" content="Gama Green Energy" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
