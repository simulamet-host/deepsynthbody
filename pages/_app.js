import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'
import favicon from "../public/favicon.ico";
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>

        <Layout>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
                <title>DeepSynthBody</title>
            </Head>

            <Component {...pageProps} />


        </Layout>
        </Provider>

    )
}

export default MyApp
