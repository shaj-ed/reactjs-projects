import { createSlice } from "@reduxjs/toolkit";
import { destinations, crew, technology } from "./../data.json";

const initialState = {
  destinations,
  crew,
  technology,
  currentDestination: destinations[0],
  currentCrew: crew[0],
  currentTechnology: technology[0],
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    changeToggleItem: (state, action) => {
      const { index, current, currentItems } = action.payload;
      state[current] = state[currentItems][index];
    },
    changeActive: (state, action) => {
      const { index, currentItems } = action.payload;
      state[currentItems].map((item) => {
        item.active = false;
      });
      state[currentItems][index].active = true;
    },
  },
});

export const { changeToggleItem, changeActive } = toggleSlice.actions;

export default toggleSlice.reducer;
