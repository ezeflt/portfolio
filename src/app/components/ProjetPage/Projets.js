import React from "react";
import "../../../../public/css/Projets.css";
import Projet from "./Projet/Projet";
import Description from "../DescriptionPage/description";
import { dataProjet } from "./dataProjet";

const Projets = () => {
  const projets = dataProjet.map((data, i) => {
    return (
      <article>
        <Projet
          index={i + 1}
          descriptionPage={false}
          number={data.number}
          img={data.img}
          title={data.title}
          description={data.description}
        />
      </article>
    );
  });

  return (
    <>
      <div id="projetContainer">
        <section>{projets}</section>
      </div>
    </>
  );
};

export default Projets;
