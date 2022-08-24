import Link from 'next/link'

import styles from '../layout/layout.module.css'

export default function BackToHome() {
  return (
    <div className={styles.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  )
}
