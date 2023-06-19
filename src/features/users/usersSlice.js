import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Kainy" },
  { id: "2", name: "Omar" },
  { id: "3", name: "Cenk" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUserss = (state) => state.users;

export default userSlice.reducer;
