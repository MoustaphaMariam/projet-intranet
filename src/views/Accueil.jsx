import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { getCollabRandom } from "../services/Services";

const Accueil = () => {
  const [collaborateur, setCollaborateur] = useState(null);

  useEffect(() => {
    getCollabRandom().then((data) => {
      setCollaborateur(data);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <h1>ACCUEIL</h1>

      {collaborateur && <h1>Hello ! {collaborateur.firstname}</h1>}
      <button>suivant</button>
    </div>
  );
};

export default Accueil;
