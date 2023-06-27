"use client";
import React, { useEffect, useState } from "react";
import "../../../../../public/css/Projet.css";
import { useRouter } from "next/navigation";
import { newData } from "@/redux/features/passData";
import { useDispatch, useSelector, batch } from "react-redux";
import { Link } from 'react-router-dom';

const Projet = ({
  index,
  img,
  title,
  description,
  number,
  descriptionPage,
}) => {


  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Utilisez localStorage ici
      localStorage.setItem('id', index);
      router.push('/description');
    } else {
      // Gérez le cas où localStorage n'est pas disponible
      console.log('localStorage is not available');
    }
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
