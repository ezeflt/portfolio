import React from 'react';
import { ReduxProvider } from '@/redux/provider';
import { Provider } from 'react-redux';
import passData from "../src/redux/features/passData";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const App = ({ Component, pageProps }) => {
  
  const store = configureStore({
    reducer: {passData}
  });
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default App;