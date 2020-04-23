import React from 'react';
import './style.scss';
import PropTypes from 'prop-types'


const SearchProfile = ({ id, lastname, firstname, title, picture, location }) => (
  <div key={id} className="searchprofile__container">
    {/* Bogdan Codes here */}
    {/* <div className="searchprofile__img" style={{backgroundImage: `url(${picture})`}}/> */}
    <div className="searchprofile__img" style={{backgroundImage: `url(https://scontent.fcdg2-1.fna.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=3eDt-aNOm8AAX8WX9lq&_nc_ht=scontent.fcdg2-1.fna&oh=6e8df0b93a109d09f88df93b283dacbb&oe=5EC55997)`}}/>
    <div className="searchprofile__infos">
      <p>{firstname}Yolo Oloy{lastname}</p>
      <p>{title}title title tile tile</p>
      <p className="searchprofile__place">Paris {location}</p>
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
  location: PropTypes.string.isRequired,
}

export default SearchProfile;