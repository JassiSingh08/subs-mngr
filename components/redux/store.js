import { configureStore } from "@reduxjs/toolkit";
import endReducer from "./reducers";

export default configureStore({
  reducer: {
    type: endReducer,
  },
});
