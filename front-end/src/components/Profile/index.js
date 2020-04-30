import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Profile = ({id, age, location, firstname, lastname, title, description, experience, portfolio, picture, bannerpicture}) => (
  <div className="profile__container">    
      <div className="profile__pict">
        <div className="profile__pict__cover" style={{backgroundImage: `url(${bannerpicture})`}} />
        <img className="profile__pict__profile" src={picture} />
      </div>
      <div className="profile__info">      
        <h4 className="profile__age">{age} ans </h4>
        <h4 className="profile__place">{location}</h4>        
      </div>
      <div className="flex">    
        <h3 className="profile__name">{firstname} {lastname}</h3>
        <h4 className="profile__ages desktops">{age} ans - {location} </h4>
        <h2 className="profile__title">{title}</h2>
      </div>
    <div className="profile__text">    
    </div>
      <div>
        <h3 className="profile__description">Description</h3>
        <p className="profile__text">{ReactHtmlParser(description)}</p>
      </div>
      <div>
        <h3 className="profile__exp">Expérience</h3>
        <p className="profile__text">{ReactHtmlParser(experience)}</p>
      </div>
      <p className="profile__portfolio">Portfolio:</p>
      <a className="profile__link" href={portfolio}>{portfolio}</a>
  </div>
)
;
// Profile.propTypes = {
//   id: PropTypes.number.isRequired,
//   firstname: PropTypes.string.isRequired,
//   lastname: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   location: PropTypes.string.isRequired,  
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   experience: PropTypes.string.isRequired,
//   portfolio: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   bannerpicture: PropTypes.string.isRequired,
// }
export default Profile;
