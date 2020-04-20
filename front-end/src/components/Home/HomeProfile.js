import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import local
import './style.scss';

const HomeProfile = ({userId, picture, firstname, lastname, title, id }) => (
  <>
    <div className="homeprofile__avatar" style={{backgroundImage: `url(${picture})` }} />
    <div className="homeprofile__text">
      <p className="homeprofile__text--name">{firstname} {lastname}</p>
      <p className="homeprofile__text--role">{title}</p>
      <ul>
        <Link to={`/profile/${id}`}><li>Voir mon profil</li></Link>
        <Link to={`/edit-profile/${id}`}><li>Modifier mon profil</li></Link>
        <Link to={`/my-announcements/${id}`}><li>Mes annonces</li></Link>
        <Link to={`/tchat-room/${id}`}><li>Messagerie</li></Link>
        <Link to="/"><li>Deconnexion</li></Link>
      </ul>
      <input className="button" type="button" value="Poster une annonce" />
    </div>
  </>
)
;


export default HomeProfile;