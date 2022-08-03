import { CssBaseline, ThemeProvider } from '@mui/material'
import { prefix } from '@utils/prefix'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import theme from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>佳瑪環能科技 | Gama Green Engergy</title>
        <meta name="description" content="佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源" />
        <meta name="author" content="FE Lyle, DESIGN Chloe" />
        <meta property="og:url" content="index.html" />
        <meta property="og:site_name" content="GAMA Green-Energy Technology" />
        <meta property="og:title" content="GAMA Green-Energy Technology" />
        <meta property="og:description" content="佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${prefix}/images/leaf.jpg`} />
        <meta property="og:locale" content="zh_tw" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="GAMA Green-Energy Technology" />
        <meta name="twitter:description" content="佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源" />
        <meta name="twitter:image" content={`${prefix}/images/leaf.jpg`} />
        <meta name="twitter:image:alt" content="GAMA Green-Energy Technology" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
