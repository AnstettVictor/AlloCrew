import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import local
import './style.scss';

const HomeProfile = ({logout, picture, firstname, lastname, title, id , }) => (
  <>
    <div className="homeprofile__avatar" id={id} style={{backgroundImage: `url(${picture})` }} />
    <div className="homeprofile__text">
      <p className="homeprofile__text--name">{firstname} {lastname}</p>
      <p className="homeprofile__text--role">{title}</p>
      <ul>
        <Link to={`/profile`}><li>Voir mon profil</li></Link>
        <Link to={`/edit-profile`}><li>Modifier mon profil</li></Link>
        <Link to={`/my-announcements`}><li>Mes annonces</li></Link>
        <Link to={`/tchat-room/${id}`}><li>Messagerie</li></Link>
        <Link to="/"><li onClick={logout}>Deconnexion</li></Link>
      </ul>
      <Link to="/create-announcement" ><input className="button" type="button" value="Poster une annonce" /></Link>
    </div>
  </>
)
;

export default HomeProfile;