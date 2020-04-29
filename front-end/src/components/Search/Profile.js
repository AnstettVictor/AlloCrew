import React from 'react';
import './profile.scss';
import {Link} from 'react-router-dom';
import bg from 'images/banniere.png';

const SearchProfile = (profile, { id, lastname, firstname, title, picture,  bannerpicture}) => {
  console.log("list", profile)
  
  return (

<div className="searchProfiles" >
  <Link to={`/profile/${profile.id}`}>
  <div className="searchProfile searchProfile--1" >
    <div className="searchProfile__info-hover">
    </div>

    <div className="searchProfile__img" style={profile.bannerpicture?{backgroundImage: `url(${profile.bannerpicture})`}: {backgroundImage: `url(${bg})` }}></div>
      <a href="#" className="searchProfile_link">
        <div className="searchProfile__img--hover" style={profile.bannerpicture?{backgroundImage: `url(${profile.bannerpicture})`}: {backgroundImage: `url(${bg})` }}>
        </div>    
      </a>
    <div className="searchProfile__info">
      <span className="searchProfile__category"> {profile.firstname?profile.firstname:"Prénom"} {profile.lastname?profile.lastname:"Nom"}</span>
      <h3 className="searchProfile__title">{profile.title}</h3>    
    </div>
  </div>
  </Link>  
</div>

)}
;

export default SearchProfile;