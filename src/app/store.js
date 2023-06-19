import { configureStore } from "@reduxjs/toolkit";
import postsReduceer from "../features/posts/postsSlice";
import usersReduceer from "../features/users/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsReduceer,
    users: usersReduceer,
  },
});
