import React from 'react';
import './profile.scss';
import {Link} from 'react-router-dom';
import bg from 'images/banniere.png';
import PropTypes from 'prop-types';

const SearchProfile = ( profile ) => {
    
  return (

    <div className="searchProfiles" >

      <Link to={`/profile/${profile.id}`}>
      <div className="searchProfile searchProfile--1" >
        <div className="searchProfile__info-hover">
        </div>

        <div className="searchProfile__img" style={profile.bannerpicture?{backgroundImage: `url(${profile.bannerpicture})`}: {backgroundImage: `url(${bg})` }}></div>
          
            <div className="searchProfile__img--hover" style={profile.bannerpicture?{backgroundImage: `url(${profile.bannerpicture})`}: {backgroundImage: `url(${bg})` }}>
            </div>

        <div className="searchProfile__info">
          <span className="searchProfile__category"> {profile.firstname?profile.firstname:"Prénom"} {profile.lastname?profile.lastname:"Nom"}</span>
          <h3 className="searchProfile__title">{profile.title}</h3>    
        </div>        
      </div>
      </Link>

    </div>
  )
}
;

SearchProfile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    bannerpicture: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
}

export default SearchProfile;