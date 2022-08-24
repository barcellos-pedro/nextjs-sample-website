import Image from 'next/image'
import Link from 'next/link'

import { name } from '../layout/layout'
import utilStyles from '../../styles/utils.module.css'

export default function PostHeader() {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
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
  )
}
