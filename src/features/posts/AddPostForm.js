import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContaentChange = (e) => setContent(e.target.value);

  const onFormClick = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <form>
      <label>title</label>
      <input type="text" value={title} onChange={onTitleChange} />
      <label>content</label>

      <input type="text" value={content} onChange={onContaentChange} />
      <button onClick={onFormClick} type="button">
        sub
      </button>
    </form>
  );
};

export default AddPostForm;
