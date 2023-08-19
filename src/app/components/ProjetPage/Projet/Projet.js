"use client";
import React from "react";
import "../../../../../public/css/Projet.css";
import { newData } from "@/redux/features/passData";
import { useDispatch } from "react-redux";

const Projet = (props) => {

  const dispatch = useDispatch();  // initialise the dispatch function

  /**
   * Description :
   * when clicked to card
   * pass project datas to the local storage
   * display the description page
   */
  function clickToCard(){

    // pass data
    dispatch(newData({
      index : props.index,
      img : props.img,
      title : props.title,
      description : props.description,
      number : props.number,
      descriptionPage : props.descriptionPage,
      longDescription : props.longDescription,
      skills : props.skills,
      imgPresentation : props.imgPresentation,
      button : props.button,
      developers : props.developers,
      designer : props.designer,
    }));
    // display the description page
    document.querySelector('#descriptionContainer').style.display = 'flex';
  };

  return (
    <div onClick={() => clickToCard()} id={ props.descriptionPage ? "descriptionPage" : props.index % 2 == 0 ? "boxProjet2" : "boxProjet" }>
      <div id="boxNumber">
        <img src={props.number} />
      </div>
      <figure>
        <img src={props.img} />
      </figure>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Projet;
