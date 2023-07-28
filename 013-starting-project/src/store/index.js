import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./auth";
import counterSliceReducer from "./counter";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
