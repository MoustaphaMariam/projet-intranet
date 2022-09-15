import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css";

const Navigation = () => {
  const [clickBtn, setClickBtn] = useState(false);
  console.log(clickBtn);

  return (
    <div className="Navigation">
      <h1>Mon intranet</h1>
      <div className="menu-icons" onClick={() => setClickBtn(!clickBtn)}>
        <i className={clickBtn ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
      <ul className="nav-menu">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Connexion</li>
        </NavLink>
        <NavLink
          to="/accueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/liste"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Liste</li>
        </NavLink>
        <NavLink
          to="/ajout"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>
            Ajout <i className="fa-solid fa-user-plus"></i>
          </li>
        </NavLink>
        <NavLink
          to="/profil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Profil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
