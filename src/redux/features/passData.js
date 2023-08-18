import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
  };
  
  export const passData = createSlice({
    name: "passData",
    initialState,
    reducers: {
      newData: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { newData } = passData.actions;
  export default passData.reducer;
  