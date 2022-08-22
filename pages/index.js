import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Pedro. I'm a software engineer from Brazil.</p>
        <p>
          You can see what i'm studying on my
          <Link href="https://github.com/barcellos-pedro"> Github 🐙</Link>
        </p>
      </section>
    </Layout>
  )
}
