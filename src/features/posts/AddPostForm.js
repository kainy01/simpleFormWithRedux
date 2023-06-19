import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUserss } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUserss);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContaentChange = (e) => setContent(e.target.value);
  const onAutherChange = (e) => setUserId(e.target.value);

  const onFormClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <form>
      <label>title</label>
      <input type="text" value={title} onChange={onTitleChange} />
      <label>Auther:</label>
      <select id="postAuthor" value={userId} onChange={onAutherChange}>
        <option value=""></option>
        {userOption}
      </select>

      <label>content</label>

      <input type="text" value={content} onChange={onContaentChange} />
      <button onClick={onFormClick} type="button" disabled={!canSave}>
        sub
      </button>
    </form>
  );
};

export default AddPostForm;
