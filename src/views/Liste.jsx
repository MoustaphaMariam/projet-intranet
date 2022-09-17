import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import { getCollabs } from "../services/Services";
import "../styles/views/liste.css";

// const handleDelete = () => {
//   axios.delete("http://localhost:3003/articles/" + article.id);
//   window.location.reload();
// };

const Liste = () => {
  const [collaborateurs, setCollaborateurs] = useState();
  //constante permettent de recuperer le valeur du filtre par categorie
  const [selectCategorie, setSelectCategorie] = useState();
  const radiosCategories = ["Marketing", "Client", "Technique"];

  const [searchInput, SetSearchInput] = useState("");

  useEffect(() => {
    getCollabs().then((data) => {
      setCollaborateurs(data);
    });
  }, []);

  console.log("valeur dans le component", collaborateurs);
  console.log(selectCategorie);
  console.log(radiosCategories);

  return (
    <div className="container">
      <Navigation />
      <form id="searchForm" className="form">
        <div className="search" id="search">
          <input
            type="text"
            placeholder="Recherche"
            id="searchInput"
            value={searchInput}
            onChange={(e) => SetSearchInput(e.target.value)}
          />
        </div>
        {/* <div className="dropdown">
          <label htmlFor="service">Recherche par &nbsp; </label>
          <select id="service" name="service" defaultValue={"default"}>
            <option value="default" disabled></option>
            <option value="marketing">Marketing</option>
            <option value="client">Client</option>
            <option value="tecnique">Technique</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="service">Par Categorie &nbsp;&nbsp; </label>
          <select id="service" name="service">
            <option value="default">-Aucune-</option>
            <option value="marketing">Marketing</option>
            <option value="client">Client</option>
            <option value="tecnique">Technique</option>
          </select>
        </div> */}
      </form>

      {/* <form>
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
      </form> */}

      <h1 className="list-title">Liste des collaborateur</h1>
      <div className="card-collabs">
        {collaborateurs
          ?.filter((collaborateur) => {
            if (searchInput == "") {
              return collaborateur;
            } else if (
              collaborateur?.firstname
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ) {
              return collaborateur;
            }
          })
          .map((collaborateur) => (
            <Card key={collaborateur.id} collaborateur={collaborateur} />
          ))}
      </div>
    </div>
  );
};

export default Liste;
