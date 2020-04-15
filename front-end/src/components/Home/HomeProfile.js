import React from 'react';
import { Link } from "react-router-dom";

//import local
import './style.scss';
import img from 'images/favicon.png';

const HomeProfile = () => (
  <>
    <div className="homeprofile__avatar" style={{backgroundImage: `url(${img})` }} />
    <div className="homeprofile__text">
      <p className="homeprofile__text--name">Prénom NOM</p>
      <p className="homeprofile__text--role">Role</p>
      <ul>
        <Link to="/profile"><li>Voir mon profil</li></Link>
        <Link to="/edit-profile"><li>Modifier mon profil</li></Link>
        <Link to="/my-announcements"><li>Mes annonces</li></Link>
        <Link to="/tchat-room"><li>Messagerie</li></Link>
        <Link to="/"><li>Deconnexion</li></Link>
      </ul>
      <input className="button" type="button" value="Poster une annonce" />
    </div>
  </>
)
;

export default HomeProfile;