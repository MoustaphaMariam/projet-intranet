import React from "react";
import Navigation from "../components/Navigation";
import "../styles/views/profil.css";

const Profil = () => {
  return (
    <div>
      <Navigation />
      <div>
        <form className="formulaire-profil">
          <label htmlFor="gender">Civilité</label>
          <select id="gender" name="gender">
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
          <label htmlFor="service">Categorie</label>
          <select id="service" name="service">
            <option value="marketing">Marketing</option>
            <option value="client">Client</option>
            <option value="tecnique">Technique</option>
          </select>
          <label htmlFor="firstname">Nom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="votre nom..."
          />
          <label htmlFor="lastname">Prenom</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="votre prenom..."
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="@email"
            name="email"
            required
          />
          <label htmlFor="password">mot de passe</label>
          <input
            type="password"
            placeholder="mot de passe"
            id="pwd"
            name="password"
            required
          />
          <label htmlFor="password">Confirmation</label>
          <input
            type="password"
            placeholder="mot de passe"
            id="password"
            name="password"
            required
          />

          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" />

          <label hFtmFor="phone">*Telephone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="06-12-34-56"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
            required
          />
          <label htmlFor="country">Pays</label>
          <input type="text" id="country" name="country" />

          <label htmlFor="fcity">Ville</label>
          <input type="text" id="city" name="fcountry" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Profil;
