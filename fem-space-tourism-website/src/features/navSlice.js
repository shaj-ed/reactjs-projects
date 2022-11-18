import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },
  },
});

export const { toggleNav } = navSlice.actions;

export default navSlice.reducer;
