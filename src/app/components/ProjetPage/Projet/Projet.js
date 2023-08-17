"use client";
import React, { useEffect, useState } from "react";
import "../../../../../public/css/Projet.css";
import { useRouter } from "next/navigation";
import { newData } from "@/redux/features/passData";
import { useDispatch, useSelector, batch } from "react-redux";
import { Link } from 'react-router-dom';

const Projet = ({ index, img, title, description, number, descriptionPage, skills, longDescription, imgPresentation, button, developers, designer }) => {

  const router = useRouter();
  const data = useSelector((state)=> state.passData.value);

  const dispatch = useDispatch();

  const handleClick = () => {

    dispatch(newData({
      index : index,
      img : img,
      title : title,
      description : description,
      number : number,
      descriptionPage : descriptionPage,
      longDescription : longDescription,
      skills : skills,
      imgPresentation : imgPresentation,
      button : button,
      developers : developers,
      designer : designer,
    }));
    document.querySelector('#descriptionContainer').style.display = 'flex';


    console.log(data);
    console.log(index, img, title, description, number, descriptionPage);

  };


  return (
    <div
      onClick={() => handleClick()}
      id={
        descriptionPage
          ? "descriptionPage"
          : index % 2 == 0
          ? "boxProjet2"
          : "boxProjet"
      }
    >
      <div id="boxNumber">
        <img src={number} />
      </div>
      <figure>
        <img src={img} />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Projet;
