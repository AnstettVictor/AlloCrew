import React from 'react';
import './profile.scss';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const SearchProfile = ({ id, lastname, firstname, title, picture,  bannerpicture}) => (

<div className="searchProfiles" >
  <Link to={`/profile/${id}`}>
  <div className="searchProfile searchProfile--1" >
    <div className="searchProfile__info-hover">
    </div>

    <div className="searchProfile__img" style={{backgroundImage: `url(${bannerpicture})`}}></div>
      <a href="#" className="searchProfile_link">
        <div className="searchProfile__img--hover" style={{backgroundImage: `url(${bannerpicture})`}}>
        </div>    
      </a>
    <div className="searchProfile__info">
      <span className="searchProfile__category"> {firstname} {lastname}</span>
      <h3 className="searchProfile__title">{title}</h3>    
    </div>
  </div>
  </Link>  
</div>

)
;

export default SearchProfile;