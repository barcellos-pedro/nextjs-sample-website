import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import PostsList from '../components/posts-list/posts-lists'

export default function Home({ posts }) {
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
      {!posts?.length > 0 ? (
        <h2>No posts yet.</h2>
      ) : (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Posts</h2>
          <PostsList posts={posts} />
        </section>
      )}
    </Layout>
  )
}

/**
 * Get data at build time and then send as props to Home component
 */
export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}
