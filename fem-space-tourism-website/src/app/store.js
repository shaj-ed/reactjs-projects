import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";
import toggleReducer from "../features/toggleSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    toggle: toggleReducer,
  },
});

export default store;
