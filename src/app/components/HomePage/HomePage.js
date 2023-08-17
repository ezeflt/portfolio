"use client"; // obligation de le mettre depuis next v13 👈🏽
import React, { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import "../../../../public/css/Home.css";
import Navbar from "../Navbar/Navbar";
import Description from "../DescriptionPage/description";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <a target='_blank' href="https://www.linkedin.com/in/ezechiel-felten-475693248/"><img src="/img/accueilImg/linkedin.png" /></a>
        <a target='_blank' href="https://github.com/ezeflt"><img src="/img/accueilImg/github.png" /></a>
        <a target='_blank' href="https://www.instagram.com/eze_flt/"><img src="/img/accueilImg/instagram.png" /></a>
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
            <button onClick={()=>{document.querySelector('#aboutMe').style.display = 'flex'}}>ME DÉCOUVRIR</button>
            <a target="_blank" href="/img/imgCV/Felten ezechiel CV (alternance).pdf" download><button>LIRE MON CV</button></a>
          </div>
        </div>
      </article>
      <div id="aboutMe">
        <FontAwesomeIcon onClick={()=>document.querySelector('#aboutMe').style.display = 'none'} id="xMark" icon={faXmark}/>
        <h2>à propos de moi</h2>
        <p>
          Depuis près d'un an maintenant, je me suis plongé dans le monde passionnant de la programmation, en développant des sites web et des applications qui sont devenus le cœur de mes activités. Tout a commencé en août 2022, lorsque j'ai été attiré par les opportunités infinies que la programmation offre, notamment grâce aux interactions que j'ai eues sur les réseaux sociaux. Cette rencontre avec la programmation a allumé une étincelle en moi, m'incitant à plonger dans l'apprentissage et à consacrer tout mon temps à cette nouvelle passion.
          <br></br><br></br>
          Après des mois d'apprentissage autodidacte intense, j'ai décidé de franchir une étape supplémentaire en rejoignant le prestigieux bootcamp "La Capsule" en octobre 2022. C'est là que j'ai eu l'opportunité d'acquérir une expertise solide en JavaScript, ainsi que de maîtriser des frameworks front-end tels que React et React Native, combinés à une maîtrise du back-end avec Node.js et Express.js. À la sortie de cette formation, j'ai été déterminé à pousser mes compétences encore plus loin.
          <br></br><br></br>
          À la suite de cette première expérience, j'ai choisi de poursuivre mon voyage en m'immergeant dans un autre bootcamp axé sur le PHP. Ce parcours intensif m'a non seulement permis d'élargir mes compétences, mais il m'a également formé à devenir un développeur polyvalent, capable de jongler avec différents langages et technologies.
          Au cours de ces dix mois riches en expériences, j'ai eu l'opportunité de mener à bien plusieurs projets passionnants, en utilisant une variété de technologies. Mon parcours m'a permis d'explorer des horizons variés et de devenir un expert dans le domaine de la programmation.
          <br></br><br></br>
          Aujourd'hui, je suis empli de fierté d'être inscrit à Hetic, classée comme l'une des meilleures écoles post-bac axées sur la technologie. Mon objectif en rejoignant Hetic est de perfectionner encore davantage mes compétences techniques, mais également de vivre ma première expérience professionnelle en alternance. Je suis fermement convaincu que cette nouvelle aventure marquera une nouvelle étape dans mon parcours, me préparant à relever de nouveaux défis et à me positionner en tant que ressource inestimable dans le monde du développement.
          Je suis prêt à plonger dans cette nouvelle phase de mon parcours, à saisir chaque opportunité qui se présente et à continuer à m'épanouir en tant que professionnel de la programmation. Mon engagement, ma passion et mon dévouement me guideront vers de nouveaux sommets et me permettront de faire une différence significative dans le monde de la technologie.
        </p>
      </div>
    </main>
  );
};

export default HomePage;
