import utilStyles from '../../styles/utils.module.css'
import PostItem from '../post-item/post-item'

export default function PostsList({ posts }) {
  return (
    <ul className={utilStyles.list}>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  )
}
