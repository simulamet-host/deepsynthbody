import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'
import favicon from "../public/favicon.ico";
import { store } from '../store'
import { Provider } from 'react-redux'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>

        <Layout>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
                <title>DeepSynthBody</title>
            </Head>
            <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-6QYSEKYWZ4`}
      />

      <Script id="my-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-6QYSEKYWZ4');
                `}
      </Script>
            <Component {...pageProps} />


        </Layout>
        </Provider>

    )
}

export default MyApp
