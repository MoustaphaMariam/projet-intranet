import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { login } from "../services/Services";
import "../styles/views/connexion.css";

const Connexion = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    // utiliser le service pour se connecter à l'api
    login(formData.email, formData.password).then(() => {
      navigate("/liste");
    });
  }

  // récupérer input email et password
  function onInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <Navigation />
      <div className="formulaire-connexion">
        <pre>{JSON.stringify(formData, null, 2)}</pre>

        <form onSubmit={submitForm}>
          <div className="con">
            <header className="head-form">
              <h2>Authentification</h2>

              <p>
                entrez votre identifiant et mot de passe pour vous connecter{" "}
              </p>
            </header>

            <br />
            <div className="field-set">
              <div className="id-connexion">
                <span className="input-item">
                  <i className="fa fa-user-circle"></i>
                </span>

                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="@identifiant"
                  name="email"
                  required
                  onInput={onInput}
                />
              </div>

              <br />

              <div className="mdp-connexion">
                <span className="input-item">
                  <i className="fa fa-key"></i>
                </span>

                <input
                  className="form-input"
                  type="password"
                  placeholder="mot de passe"
                  id="pwd"
                  name="password"
                  onInput={onInput}
                  required
                />

                <span>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    type="button"
                    id="eye"
                  ></i>
                </span>
              </div>
              <br />
              <button type="submit" className="log-in">
                SE CONNECTER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
