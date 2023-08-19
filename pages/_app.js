import React from 'react';
import { Provider } from 'react-redux';
import passData from "../src/redux/features/passData";
import { configureStore } from "@reduxjs/toolkit";

const App = ({ Component, pageProps }) => {
  
  // create a store for all component
  const store = configureStore({
    reducer: {passData}
  });
  
  return (
    // return all component with the local storage
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default App;