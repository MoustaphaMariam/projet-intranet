import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./views/Connexion";
import Accueil from "./views/Accueil";
import Liste from "./views/Liste";
import Profil from "./views/Profil";
import Ajout from "./views/Ajout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="*" element={<Connexion />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Liste" element={<Liste />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Ajout" element={<Ajout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
