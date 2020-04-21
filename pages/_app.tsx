import { AppProps } from "next/app"
import Head from "next/head"
import Typography from "typography"
import moraga from "typography-theme-moraga"
import Layout from "../components/Layout"
import "../css/styles.css"

const typography = new Typography(moraga)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>litemerafrukt</title>
        <style>{typography.toString()}</style>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
