import React from 'react';
import './style.scss';
import searchlogo from 'images/svg/search.svg';
import AnnouncementList from '../AnnouncementList';
import ProfileList from './ProfileList';

const Search = ({list}) => (
  <div>

    <div className="search__header">
     
          <p>Rechercher une annonce</p>
          <p>Rechercher un profil</p>
        
        <form className="search__form">
            <input className=" search__input" placeholder="Rechercher..."/>
            <input style={{backgroundImage: `url(${searchlogo})` }} className=" search__button" type="submit" value="." 
            />
        </form>
    </div>
    
    <div className="announcementList">
      <ProfileList {...list}/>
    </div>


  </div>
)
;

Search.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,        
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Search;