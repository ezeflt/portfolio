"use client"; // This is a client component 👈🏽
import { useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux';
import store from '@/redux/store';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {


  useEffect(()=>{

    const threeScript = document.createElement('script');  // create a script 
    threeScript.setAttribute('id', 'threeScript');         // add an ID to threeScript

    // add the bacckground animation to threeScript
    threeScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');

    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return ()=>{ threeScript && threeScript.remove() };
  },[])

  return (
    <html lang="fr">
      <head>
        <link type="image/png" rel="icon" sizes="180x180" href="img/EF.png" />
        <title>Ezechiel Felten</title>
        <meta name='description' content='Ezechiel Felten, développeur web portfolio. programmeur depuis 2022 découvrez à travers ce portfolio mes compétences ainsi que chacun de mes projets. ' ></meta>
        <meta name='language' content='fr'></meta>
      </head>
      <Provider store={store}>
        <body className={inter.className}>
            {children}
        </body>
      </Provider>
    </html>
  )
}
