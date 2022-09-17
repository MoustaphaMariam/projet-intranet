import React, { useState } from "react";
import "../styles/components/card.css";

const Card = ({ collaborateur }) => {
  const [age, setAge] = useState();

  return (
    <div className="card">
      <div className="img-collab">
        <img src={collaborateur.photo} alt={"photo " + collaborateur.Owen} />
      </div>
      <div className="info-collab">
        <div className="title-card">
          <h3>
            {collaborateur.firstname} {collaborateur.lastname}
          </h3>
          <span>{collaborateur.service}</span>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <span>
            {collaborateur.city}&nbsp; , {collaborateur.country}
          </span>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <span>{collaborateur.phone}</span>
        </div>
        <div>
          <i className="fa-regular fa-envelope"></i>
          <span>{collaborateur.email}</span>
        </div>
        <div>
          <i className="fa-solid fa-cake-candles"></i>
          <span>{collaborateur.birthdate}</span>
        </div>
        <div className="card-btn">
          <button>Editer</button>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Voulez-vous vraiment supprimer cet utlisateur ?"
                )
              ) {
                //handleDelete();
              }
            }}
          >
            Suprimer
          </button>
        </div>
      </div>
      {/* <img src={collaborateur.photo} alt={"photo " + collaborateur.Owen} />
      <p>
        {collaborateur.gender},{collaborateur.firstname},
        {collaborateur.lastname},{collaborateur.email},{collaborateur.phone},
        {collaborateur.birthdate},{collaborateur.city},{collaborateur.country}
      </p> */}
    </div>
  );
};
export default Card;
