import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "KAy", content: "lorem" },
  { id: "2", title: "omar", content: "rrr" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const {postAdded}=postsSlice.actions;

export default postsSlice.reducer;
