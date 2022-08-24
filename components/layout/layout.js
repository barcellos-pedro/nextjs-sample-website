import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'

const name = 'Pedro Reis'
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
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
