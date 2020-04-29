import React from 'react';
import './style.scss';
import bg from 'images/banniere.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

const LandPage = (state) => {console.log("STAAAAAAAAAAAAAAAATE", state)
  return (
    <div className="landPage__Container" style={{backgroundImage: `url(${bg})` }}>
      <div className="landpage__filter">
        <div className="landPage__InfoContainer">
          <div className="landPage__Description">
            <p>
            AlloCrew est une plateforme de mise en relation entre créatifs destinée au monde de l'audiovisuel, du Broadcast et du cinéma. Nous sommes ici pour mettre en relation les membres et faciliter leurs recherches d'emploi.<i className="landPage__italic"> Avec AlloCrew, vous trouverez des annonces qui VOUS correspondent.</i></p>
            <p>
           AlloCrew est venu de l'idée d'un product holder connaissant ce domaine et étant donc au courant du manque flagrant de service à la disposition de cette communauté. AlloCrew est donc né, espérant offrir un potentiel réseau à nos utilisateurs.
            </p>
          </div>
          <Link to="/login"><span className="landPage__button button">Connexion</span></Link>
          <Link to="/register"><span className="landPage__button button">Inscription</span></Link>
        </div>
      </div>
    </div>
  )
};

export default LandPage;