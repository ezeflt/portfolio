"use client"; // This is a client component 👈🏽
import { useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

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
      <ReduxProvider store={children}>
        <body className={inter.className}>
            {children}
        </body>
      </ReduxProvider>
    </html>
  )
}
