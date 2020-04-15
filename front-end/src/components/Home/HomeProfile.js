import React from 'react';
import './style.scss';
import img from 'images/favicon.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const HomeProfile = () => (
  <>
    <div className="homeprofile__avatar" style={{backgroundImage: `url(${img})` }} />
    <div className="homeprofile__text">
      <p className="homeprofile__text--name">Prénom NOM</p>
      <p className="homeprofile__text--role">Role</p>
      <ul>
        <Link to="/profile"><li>Voir mon profil</li></Link>
        <Link><li>Modifier mon profil</li></Link>
        <Link><li>Mes annonces</li></Link>
        <Link><li>Mes messages</li></Link>
        <Link><li>Deconnexion</li></Link>
      </ul>
      <input className="button" type="button" value="Poster une annonce" />
    </div>
  </>
)
;

export default HomeProfile;