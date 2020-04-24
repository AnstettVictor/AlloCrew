import React from 'react';
import './style.scss';
import PropTypes from 'prop-types'


const SearchProfile = ({ id, lastname, firstname, title, picture, location }) => (
  <div className="searchprofile__container">
    
    <div className="searchprofile__img"  style={{backgroundImage: `url(${picture})`}}/>
    <div className="searchprofile__infos">
      <p>{firstname}{lastname}</p>
      <p>{title}</p>
      <p className="searchprofile__place">{location}</p>
    </div>
  </div>
)
;

// SearchProfile.propTypes = {
//   id: PropTypes.number.isRequired,
//   firstname: PropTypes.string.isRequired,
//   lastname: PropTypes.string.isRequired,    
//   title: PropTypes.string.isRequired, 
//   picture: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
// }

export default SearchProfile;