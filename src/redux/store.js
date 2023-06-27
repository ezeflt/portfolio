import { configureStore } from "@reduxjs/toolkit";
import passData from "./features/passData";

const store = configureStore({
  reducer: {
    passData
  }
});

export default store;