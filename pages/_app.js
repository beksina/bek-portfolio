import Layout from '../components/layout'
import Head from 'next/head'
import {ChakraProvider, extendTheme, ColorModeScript} from '@chakra-ui/react'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <title>Bekim Sinanovic</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
