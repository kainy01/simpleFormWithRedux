import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";

function App() {
  return <div>
    <PostList />
    <AddPostForm />
  </div>;
}

export default App;
