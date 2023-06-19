
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({post}) => {
  return (
    <div >
      <h1>{post.title}</h1>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.date} />
    </div>
  )
}

export default PostsExcerpt
