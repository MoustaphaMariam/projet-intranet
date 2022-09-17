import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="Navigation">
      <div className="dropdown">
        <div className="profil-deconnexion">
          {/* <NavLink to="/"></NavLink>
          <button>
            Deconnexion<i className="fa-solid fa-right-from-bracket"></i>
          </button> */}
        </div>
        <input type="checkbox" id="ham-menu" />
        <label htmlFor="ham-menu">
          <div className="hide-des">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
        </label>
        <div className="full-page-green"></div>
        <div className="ham-menu">
          <ul className="centre-text bold-text">
            <NavLink to="/profil">
              <li className="profil-photo">
                <img className="profil-nav" src={userInfo.photo} alt="" />
              </li>
            </NavLink>
            <NavLink to="/accueil">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/liste">
              <li>Liste</li>
            </NavLink>
            <NavLink to="/ajout">
              <li>Ajout</li>
            </NavLink>

            <NavLink to="/">
              <li>
                Deconnexion<i className="fa-solid fa-right-from-bracket"></i>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="nabar">
        <span className="logo-entreprise">
          <img src="/images/logo.png" alt="" />
        </span>
      </div>
    </div>
    // <div className="Navigation">
    //   <span className="logo-entreprise">
    //     <img src="/images/logo.png" alt="" />
    //   </span>
    //   <div className="menu-icons" onClick={() => changeIcon()}>
    //     <i
    //       className={clickBtn === false ? "fa-solid fa-bars" : "fa-solid fa-x"}
    //     ></i>
    //   </div>
    //   {clickBtn === true && (
    //     <ul className="nav-menu">
    //       <NavLink
    //         to="/"
    //         className={(nav) => (nav.isActive ? "nav-active" : "")}
    //       >
    //         <li>Connexion</li>
    //       </NavLink>
    //       <NavLink
    //         to="/accueil"
    //         className={(nav) => (nav.isActive ? "nav-active" : "")}
    //       >
    //         <li>Accueil</li>
    //       </NavLink>
    //       <NavLink
    //         to="/liste"
    //         className={(nav) => (nav.isActive ? "nav-active" : "")}
    //       >
    //         <li>
    //           <i class="fa-solid fa-list"></i>Liste
    //         </li>
    //       </NavLink>
    //       <NavLink
    //         to="/ajout"
    //         className={(nav) => (nav.isActive ? "nav-active" : "")}
    //       >
    //         <li>
    //           <i className="fa-solid fa-user-plus"></i>
    //         </li>
    //       </NavLink>

    //       <NavLink
    //         to="/profil"
    //         className={(nav) => (nav.isActive ? "nav-active" : "")}
    //       >
    //         <li>
    //           <img src={userInfo.photo} alt="" />
    //           <span>{userInfo.firstname}</span>
    //         </li>
    //       </NavLink>
    //       <NavLink
    //         to="#"
    //         className={(nav) => (nav.isActive ? "nav-active" : "")}
    //       >
    //         <li>
    //           Deconnexion<i className="fa-solid fa-right-from-bracket"></i>
    //         </li>
    //       </NavLink>
    //     </ul>
    //   )}
    // </div>
  );
};

export default Navigation;
