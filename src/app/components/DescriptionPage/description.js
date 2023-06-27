"use client";
import React, { useEffect, useState } from "react";
import "../../../../public/css/Description.css";
import Projet from "../ProjetPage/Projet/Projet";
import Langage from "../SkillsPage/langage/Langage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { dataProjet } from "../ProjetPage/dataProjet";

const Description = () => {

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const storedValue = localStorage.getItem('id');
    console.log('INDEX',storedValue);
    setIndex(storedValue-1);
    // Faites quelque chose avec la valeur récupérée de localStorage
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push("/#projetContainer");
  };

  const dataTest = {
    title: "Projet",
    img: "/img/accueilImg/github.png",
    number: "/img/number/logo1.svg",
    description:
      "Ce projet est une création de clone du site web twitter Ce projet est une création de clone du site web twitter",
    skills: [
      { titleLangage: "HTML", img: "/img/skillsImg/HTML5.png" },
      { titleLangage: "CSS", img: "/img/skillsImg/CSS3.png" },
      { titleLangage: "JS", img: "/img/skillsImg/JS.png" },
      { titleLangage: "REACT", img: "/img/skillsImg/REACT.png" },
      { titleLangage: "BOOTSTRAP", img: "/img/skillsImg/bootstrap.png" },
    ],
  };

  const skills = dataTest.skills.map((data, i) => {
    return (
      <Langage
        descriptionPage={true}
        img={data.img}
        titleLangage={data.titleLangage}
        key={i}
      />
    );
  });

  return (
    <div id="descriptionContainer">
      <a href="#containerSkills">
        <FontAwesomeIcon
          onClick={() => handleClick()}
          id="leavePage"
          icon={faXmark}
        />
      </a>
      <article id="box">
        <div id="firstInfo">
          <section>
            <Projet
              number={dataProjet[index].number}
              img={dataProjet[index].img}
              title={dataProjet[index].title}
              description={dataProjet[index].description}
              descriptionPage={true}
            />
          </section>
          <section id="information">
            <h1>{dataProjet[index].title}</h1>
            <article>
              <div className="metier">
                <span className="metier-span">Développeur :</span>
                <span className="employe-span">@Développeur</span>
                <span className="employe-span">@Développeur</span>
              </div>
              <div className="metier">
                <span className="metier-span designer">Designer :</span>
                <span className="employe-span">@Designer</span>
                <span className="employe-span">@Designer</span>
              </div>
            </article>
            <article>
              <p>
                {dataProjet[index].description2}
              </p>
            </article>
            <article>
              <button className="btn-visit">SITE WEB</button>
              <button className="btn-visit">GITHUB</button>
            </article>
          </section>
        </div>
        <div id="secondInfo">{skills}</div>
      </article>
      <article id="imagePresentation">
        <img src="/img/imgProjet/twitterMac.png" />
        <img src="/img/imgProjet/twitterPhone.png" />
      </article>
    </div>
  );
};

export default Description;
