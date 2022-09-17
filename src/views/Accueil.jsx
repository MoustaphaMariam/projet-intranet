import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { getCollabRandom } from "../services/Services";
import "../styles/views/accueil.css";

const Accueil = () => {
  const [collaborateur, setCollaborateur] = useState(null);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = () => {
    getCollabRandom().then((data) => {
      setCollaborateur(data);
    });
  };

  return (
    <div className="accueil">
      <Navigation />
      <div className="welcome">
        <h2>Bienvenue sur l'intranet de</h2>
        <span>
          <img src="/images/nom.png" alt="" />
        </span>
      </div>

      {collaborateur && (
        <div className="card-accueil">
          <h3>Dite bonjour à : {collaborateur.firstname}</h3>
          <div className="card-container">
            <span className="pro">{collaborateur.service}</span>
            <img
              className="round"
              src={collaborateur.photo}
              alt={"photo " + collaborateur.Owen}
            />
            <h3>
              {collaborateur.firstname} {collaborateur.lastname}
            </h3>
            <h6>
              {collaborateur.city},{collaborateur.country}
            </h6>
            <p>
              {collaborateur.email} <br /> {collaborateur.phone}
            </p>
          </div>
        </div>
      )}

      <button onClick={() => getRandom()}>suivant</button>
    </div>
  );
};

export default Accueil;
