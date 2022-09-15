import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import { getCollabs } from "../services/Services";
import "../styles/views/liste.css";

const Liste = () => {
  const [collaborateurs, setCollaborateurs] = useState();
  //constante permettent de recuperer le valeur du filtre par categorie
  const [selectCategorie, setSelectCategorie] = useState();
  const radiosCategories = ["Marketing", "Client", "Technique"];

  useEffect(() => {
    getCollabs().then((data) => {
      setCollaborateurs(data);
    });
  }, []);

  console.log("valeur dans le component", collaborateurs);
  console.log(selectCategorie);
  console.log(radiosCategories);

  return (
    <div>
      <Navigation />
      <form>
        {radiosCategories.map((categorie) => (
          <li key={categorie.toString()}>
            <input
              type="radio"
              id="{categorie}"
              name="radio-categorie"
              onChange={(e) => setSelectCategorie(e.target.value)}
            />
            <label htmlFor="{categorie}">{categorie}</label>
          </li>
        ))}
      </form>

      <h1>Liste des collaborateur</h1>
      <div>
        {collaborateurs &&
          collaborateurs
            .filter((collaborateur) =>
              collaborateur.service.includes(selectCategorie)
            )
            .map((collaborateur) => (
              <Card key={collaborateur.id} collaborateur={collaborateur} />
            ))}
      </div>
    </div>
  );
};

export default Liste;
