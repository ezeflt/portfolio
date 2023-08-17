import { configureStore } from "@reduxjs/toolkit";
import passDataReducer from "./features/passData";

const store = configureStore({
  reducer: {
    passData: passDataReducer
  }
});

export default store;