import React from 'react';
import './style.scss';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const SearchProfile = ({ id, lastname, firstname, title, picture, location, bannerpicture, description }) => (
  <div className="searchProfile"> 

    <div className="searchProfile__banner" style={{backgroundImage: `url(${bannerpicture})`}} >

    <Link to={`/profile/${id}`}>
      <div className="searchProfile__avatar" style={{backgroundImage: `url(${picture})`}} />
    </Link>
      </div> 
      <p className="searchProfile__user">
        {firstname} {lastname}        
      </p>

    <div className="searchProfile__bot">
      <div className="searchProfile__botleft">
        <p className="searchProfile__title">{title}</p>
        <div className="searchProfile__description">
          {ReactHtmlParser(description.length > 100 ?`${description.substring(0, 99)} ...`:{description})}
        </div>
      </div>
      <div className="searchProfile__botright">
        <div className="searchProfile__details">        
          <p>{location}</p>          
        </div>
        <input className="searchProfile__button button see" type="button" value="Voir l'annonce"/>

        <Link to={`/profile/${id}`}>
          <input className="searchProfile__button button seeAndEdit" type="button" value="Voir l'Annonce"/>
        </Link>
      </div>
    </div>
  </div>
)
;

export default SearchProfile;