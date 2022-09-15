import React, { useState } from "react";
import "../styles/components/card.css";

const Card = ({ collaborateur }) => {
  const [age, setAge] = useState();

  return (
    <div className="card">
      <div className="card-collab">
        <div className="img-collab">
          <img src={collaborateur.photo} alt={"photo " + collaborateur.Owen} />
        </div>
        <div className="info-collab">
          <h3>
            {collaborateur.firstname} {collaborateur.lastname}
          </h3>
          <div>
            <i class="fa-solid fa-phone"></i>
            <span>{collaborateur.phone}</span>
          </div>
          <div>
            <i class="fa-regular fa-envelope"></i>
            <span>{collaborateur.email}</span>
          </div>
          <div>
            <i class="fa-solid fa-cake-candles"></i>
          </div>
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
