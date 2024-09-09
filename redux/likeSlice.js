// likeSlice.js
import { createSlice } from "@reduxjs/toolkit";



const likeSlice = createSlice({
  name: "like",
  initialState: {
    // likes: loadLikesFromLocalStorage(), // localStorage'dan likes'ı al
    likes: []
  },
  reducers: {
    handleLike: (state, action) => {
      const id = action.payload;
      if (!id) return state;
      if (state.likes.includes(id)) {
        state.likes = state.likes.filter((it) => it !== id);
      } else {
        state.likes = state.likes.concat(id);
      }
      // localStorage'a güncel likes'ı kaydet

      localStorage.setItem("likes", JSON.stringify(state.likes));
    },
    setLikes: (state, action) => {
      state.likes = action.payload;
    }
  },
});

export const { handleLike, setLikes } = likeSlice.actions;

export default likeSlice.reducer;
