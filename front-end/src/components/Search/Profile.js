import React from 'react';
import './profile.scss';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const SearchProfile = ({ id, lastname, firstname, title, picture,  bannerpicture}) => (

<div class="searchProfiles" >
  <Link to={`/profile/${id}`}>
  <div class="searchProfile searchProfile--1" >
    <div class="searchProfile__info-hover">
    </div>

    <div class="searchProfile__img" style={{backgroundImage: `url(${bannerpicture})`}}></div>
      <a href="#" class="searchProfile_link">
        <div class="searchProfile__img--hover" style={{backgroundImage: `url(${bannerpicture})`}}>
        </div>    
      </a>
    <div class="searchProfile__info">
      <span class="searchProfile__category"> {firstname} {lastname}</span>
      <h3 class="searchProfile__title">{title}</h3>    
    </div>
  </div>
  </Link>  
</div>

)
;

export default SearchProfile;