import Head from 'next/head'

import styles from './layout.module.css'
import Header from '../header/header'
import BackToHome from '../back-to-home/back-to-home'

export const name = 'Pedro Reis'
export const siteTitle = 'Pedro Reis Blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* Head Metaproperties*/}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content="/images/profile.jpg" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        {home && <Header />}
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      {!home && <BackToHome />}
    </div>
  )
}
