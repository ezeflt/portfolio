import { createSlice } from "@reduxjs/toolkit";

// the local storage value
const initialState = {
    value: {},
  };
  
  export const passData = createSlice({
    name: "passData",
    initialState,
    reducers: {

      /**
       * Description :
       * pass the data to the local storage
       * 
       * @param {object} state the value of local storage
       * @param {object} action // the data that user wants to add
       */
      newData: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { newData } = passData.actions;
  export default passData.reducer;
  