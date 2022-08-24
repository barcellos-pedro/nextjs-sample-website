import Head from 'next/head'

import styles from './layout.module.css'
import HomeHeader from '../home-header/home-header'
import PostHeader from '../post-header/post-header'
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
        {home ? <HomeHeader /> : <PostHeader />}
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      {!home && <BackToHome />}
    </div>
  )
}
