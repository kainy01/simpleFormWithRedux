import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content.substring(0,100)}</p>
    </div>
  ));

  return (
    <div>
      <h2>posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostList;
