import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import Layout from '../../components/layout'

export default function FirstPost() {
  const [message, setMessage] = useState('')

  function scriptLoaded() {
    const message = cowsay.say({
      text: 'Loading scripts is easy!',
      e: '^^', // eyes
      T: 'U ', // tongue
      f: 'USA', // name of the cow from `cows` folder
    })
    setMessage(message)
    console.log('script loaded!')
  }

  return (
    <Layout>
      <Head>
        <title>How to load scripts</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/cowsay@1.5.0/build/cowsay.umd.min.js"
        strategy="lazyOnload"
        onLoad={scriptLoaded}
      />
      <h1>How to load third-party scripts</h1>
      <p>This page shows how to load third-party scripts in Nextjs</p>
      {message ? <pre>{message}</pre> : <h2>Loading script...</h2>}
    </Layout>
  )
}
