import Link from 'next/link'

/**
 * Custom 404 page
 *
 * This file/page is statically generated at build time
 */
export default function Custom404() {
  return (
    <div style={styles.div}>
      <h1>Uh oh. Page Not Found.</h1>
      <Link href="/">🏠 Back to home</Link>
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}
