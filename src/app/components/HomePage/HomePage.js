"use client"; // obligation de le mettre depuis next v13 👈🏽
import React, { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import "../../../../public/css/Home.css";
import Navbar from "../Navbar/Navbar";
import Description from "../DescriptionPage/description";

const HomePage = () => {
  //setter qui met à jour l'état de la librarie
  const [vantaEffect, setVantaEffect] = useState(0);
  //réference lier à la div <main></main>
  const vantaRef = useRef(null);

  // au chargement du composant
  //si l'état vantaEffect est false ou undifined -> met le à jour et remplie le canvas
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 45.0,
          waveHeight: 18.5,
          waveSpeed: 0.7,
          zoom: 1.3,
        })
      );
    }
    //détruit le librairie
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <main id="home" className="main" ref={vantaRef}>
      {/* composant navbar */}
      <Navbar />
      {/* réseaux sociaux */}
      <div id="boxReseaux">
        <img src="/img/accueilImg/linkedin.png" />
        <img src="/img/accueilImg/github.png" />
        <img src="/img/accueilImg/instagram.png" />
      </div>
      {/* présentation */}
      <article>
        <div>
          <h1>Ezechiel Felten</h1>
          <div id="boxCertif">
            <h5>Développeur Front-End | Back-End</h5>
            <h5>UI|UX Design.</h5>
          </div>
          <div id="boxBtn">
            <button>ME DÉCOUVRIR</button>
            <button>LIRE MON CV</button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default HomePage;
