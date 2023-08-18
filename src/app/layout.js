"use client"; // This is a client component 👈🏽
import { useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider';
import { Provider } from 'react-redux';
import passData from "../redux/features/passData";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {


  const reducerLocal = combineReducers({ passData });

  const persistConfig = { key: "Description", storage };
  
  const store = configureStore({
    reducer: persistReducer(persistConfig, reducerLocal),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: true }),
  });
  

  useEffect(()=>{
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return ()=>{
      if(threeScript){
        threeScript.remove();
      }
    }
  },[])

  return (
    <html lang="fr">
      <head>
        <title>Portfolio</title>
        <meta name='description' content='voici mon portfolio' ></meta>
        <meta name='language' content='fr'></meta>
        <link rel="vercel" sizes="180x180" href="vercel.svg" />
      </head>
      <Provider store={store}>
        <body className={inter.className}>
            {children}
        </body>
      </Provider>
    </html>
  )
}
