import { useSelector } from "react-redux";
import { selectAllUserss } from "../users/usersSlice";

const PostAuthor = ({userId}) => {
    
  const users = useSelector(selectAllUserss);

  const author = users.find((user) => user.id === userId);

  return <div>by {author ? author.name : "unkown Author"}</div>;
};

export default PostAuthor;
