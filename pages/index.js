import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'

import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Introduction */}
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Pedro. I'm a software engineer from Brazil.</p>
        <p>
          You can see what i'm studying on my
          <Link href="https://github.com/barcellos-pedro"> Github 🐙</Link>
        </p>
      </section>

      {/* Posts List */}
      {!allPostsData?.length > 0 ? (
        <h2>No posts yet.</h2>
      ) : (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Posts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  )
}

/**
 * Get data at build time and then send as props to Home component
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
