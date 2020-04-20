import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import local
import './style.scss';
import img from 'images/favicon.png';

const HomeProfile = ({ connectedUser, isLogged }) => (
  <>
    <div className="homeprofile__avatar" style={{backgroundImage: `url(${connectedUser.picture})` }} />
    <div className="homeprofile__text">
      <p className="homeprofile__text--name">{connectedUser.firstname} {connectedUser.lastname}</p>
      <p className="homeprofile__text--role">{connectedUser.title}</p>
      <ul>
        <Link to={`/profile/${connectedUser.id}`}><li>Voir mon profil</li></Link>
        <Link to={`/edit-profile/${connectedUser.id}`}><li>Modifier mon profil</li></Link>
        <Link to={`/my-announcements/${connectedUser.id}`}><li>Mes annonces</li></Link>
        <Link to={`/tchat-room/${connectedUser.id}`}><li>Messagerie</li></Link>
        <Link to="/"><li>Deconnexion</li></Link>
      </ul>
      <input className="button" type="button" value="Poster une annonce" />
    </div>
  </>
)
;

HomeProfile.PropTypes = {
  isLogged: PropTypes.bool.isRequired,
  connectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    
  }).isRequired,

}

export default HomeProfile;