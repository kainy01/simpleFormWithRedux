import { configureStore } from "@reduxjs/toolkit";
import postsReduceer from "../features/posts/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReduceer,
  },
});
