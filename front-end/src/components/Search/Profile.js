import React from 'react';
import './style.scss';
import PropTypes from 'prop-types'


const SearchProfile = ({ lastname, firstname, title, picture }) => (
  <div className="searchprofile__container">
    {/* Bogdan Codes here */}
    <div className="searchprofile__img" style={{backgroundImage: `url(${picture})`}}/>
    <div className="searchprofile__infos">
      <p>{firstname} {lastname}</p>
      <p>{title}</p>
    </div>
  </div>
)
;

SearchProfile.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,    
  title: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired,
}

export default SearchProfile;