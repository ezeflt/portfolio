import React from "react";
import "../../../../public/css/Projets.css";
import Projet from "./Projet/Projet";       // GET the child project component
import { dataProjet } from "./dataProjet";  // GET projects data from dataProjet.js

const Projets = () => {

  /**
   * Description :
   * this constant to hold each project
   */
  const projets = dataProjet.map((data, i) => {
    return (
      <article>
        {/* send the projects data by using spread operator */}
        <Projet index={i + 1} descriptionPage={false} {...data}/>
        <figure id="videoRepresentation">
          <video muted loop className={data.Vitrine.class} autoPlay src={data.Vitrine.src} />
        </figure>
      </article>
    );
  });

  return (
    <>
      <div id="projetContainer">
        <section>
          {/* call the container containing each project */}
          {projets}
        </section>
      </div>
    </>
  );
};

export default Projets;
