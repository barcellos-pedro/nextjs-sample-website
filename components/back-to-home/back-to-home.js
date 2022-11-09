import Link from 'next/link'

import styles from '../layout/layout.module.css'

export default function BackToHome() {
  return (
    <div className={styles.backToHome}>
      <Link href="/">← Back to home</Link>
    </div>
  )
}
