import Head from 'next/head'

import Date from '../../components/date/date'
import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

/**
 * Statically pre-render pages for specified paths with dynamic routes.
 *
 * **Must** be used with getStaticProps
 *
 * On Development: Runs on every request.
 * On Production: Runs at build time.
 *
 * Like /posts/[id]
 */
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }

  /**
   * fallback = false | true | 'blocking'
   * false: any paths not returned by getStaticPaths will result in a 404 page.
   *
   * true: The paths that have not been generated at build time will not result in a 404 page.
   * Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
   * In the background, Next.js will statically generate the requested path.
   * Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
   *
   * blocking: new paths will be server-side rendered **with** getStaticProps
   * and cached for future requests so it only happens once per path.
   */
}

/**
 * Fetches data for the post with and given [id]
 *
 * On Development: Runs on every request.
 * On Production: Runs at build time.
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
