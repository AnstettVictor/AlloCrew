import React from 'react';
import './style.scss';
import img from 'images/favicon.png';

const HomeProfile = () => (
  <>
    <div className="homeprofile__banner">
      <div className="homeprofile__avatar" style={{backgroundImage: `url(${img})` }} />
    </div>
    <div className="homeprofile__text">
      <p className="homeprofile__text--name">Prénom NOM</p>
      <p className="homeprofile__text--role">Role</p>
      <ul>
        <li>Voir mon profil</li>
        <li>Modifier mon profil</li>
        <li>Mes annonces</li>
        <li>Mes messages</li>
        <li>Paramètres</li>
        <li>Deconnexion</li>
      </ul>
      <input type="button" value="Poster une annonce" />
    </div>
  </>
)
;

export default HomeProfile;