import { configureStore } from "@reduxjs/toolkit";
import passDataReducer from "./features/passData";

// create the reducer store
const store = configureStore({
  reducer: {
    passData: passDataReducer
  }
});

export default store;