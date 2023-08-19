"use client";
import React from "react";
import "../../../../public/css/Description.css";
import Projet from "../ProjetPage/Projet/Projet";
import Langage from "../SkillsPage/langage/Langage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Description = () => {

  let skills;       // initialise the skills variable
  let developers;   // initialise the developers variable
  let designer;     // initialise the designer variable
  let button;       // initialise the button variable
  let image;        // initialise the image variable

  // initialise project data from the local storage
  const descriptionData = useSelector((state)=> state.passData.value);

  /**
   * Description :
   * when clicked to xMark, don't display the description Container
   */
  function handleClick(){
    document.querySelector('#descriptionContainer').style.display = 'none';
  };


  // check if descriptionData is not empty
  if(descriptionData.skills){

    // the skills variable value is a loop througth the skills
    skills = descriptionData.skills.map((data, i) => {
      return  <Langage descriptionPage={true} img={data.img} titleLangage={data.titleLangage} key={i}/>
    });
    
    // the developers variable value is a loop througth the developer names
    developers = descriptionData.developers.map(developer => {
       return <span className="employe-span">@{developer}</span>
      });

    // the designer variable value is a loop througth the designer names
    designer = descriptionData.designer.map(designer => {
       return <span className="employe-span">@{designer}</span>
      });

    // the button variable value is a loop througth the buttons
    button = descriptionData.button.map(button => {
       return <a target="_blank" href={button.link} className="btn-visit">{button.title}</a>
      });

    // the image variable value is a loop througth the images
    image = descriptionData.imgPresentation.map(image => {
       return <img src={image} />
      })
  }

  return (
    <div id="descriptionContainer">
      <div id="container">
        <a>
          <FontAwesomeIcon onClick={() => {handleClick()}} id="leavePage" icon={faXmark}/>
        </a>
        <article id="box">
          <div id="firstInfo">
            <section id="cardContainer">
              <Projet number={descriptionData.number} img={descriptionData.img} title={descriptionData.title} description={descriptionData.description} descriptionPage={true}/>
            </section>
            <section id="information">
              <h1>{descriptionData.title}</h1>
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
                  {descriptionData.longDescription}
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
