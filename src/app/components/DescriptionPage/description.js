"use client";
import React, { useEffect, useState } from "react";
import "../../../../public/css/Description.css";
import Projet from "../ProjetPage/Projet/Projet";
import Langage from "../SkillsPage/langage/Langage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { dataProjet } from "../ProjetPage/dataProjet";
import { useSelector } from "react-redux";

const Description = () => {

  const [index, setIndex] = useState(0);

  const data = useSelector((state)=> state.passData.value);

  const handleClick = () => {
    document.querySelector('#descriptionContainer').style.display = 'none';
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
  let skills;
  let developers;
  let designer;
  let button;
  let image;

  if(data.skills){
    skills = data.skills.map((data, i) => {return  <Langage descriptionPage={true} img={data.img} titleLangage={data.titleLangage} key={i}/>});
    developers = data.developers.map(developer => { return <span className="employe-span">@{developer}</span>});
    designer = data.designer.map(designer => { return <span className="employe-span">@{designer}</span>});
    button = data.button.map(button => { return <a target="_blank" href={button.link} className="btn-visit">{button.title}</a>});
    image = data.imgPresentation.map(image => { return <img src={image} />})
  }

  return (
    <div id="descriptionContainer">
      <div id="container">
        <a>
          <FontAwesomeIcon
            onClick={() => handleClick()}
            id="leavePage"
            icon={faXmark}
          />
        </a>
        <article id="box">
          <div id="firstInfo">
            <section id="cardContainer">
              <Projet
                number={data.number}
                img={data.img}
                title={data.title}
                description={data.description}
                descriptionPage={true}
              />
            </section>
            <section id="information">
              <h1>{data.title}</h1>
              <article>
                <div className="metier">
                  <span className="metier-span">Développeur :</span>
                  <div>{developers}</div>
                </div>
                <div className="metier">
                  <span className="metier-span designer">Designer :</span>
                  <div>{designer}</div>
                </div>
              </article>
              <article>
                <p>
                  {data.longDescription}
                </p>
              </article>
              <article>
                {button}
              </article>
            </section>
          </div>
          <div id="secondInfo">{skills}</div>
        </article>
        <article id="imagePresentation">
          {image}
        </article>
      </div>
    </div>
  );
};

export default Description;
