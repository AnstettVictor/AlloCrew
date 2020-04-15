import React from 'react';
import './style.scss';
import searchlogo from 'images/svg/search.svg';
import AnnouncementList from '../AnnouncementList';
import ProfileList from './ProfileList';

const Search = () => (
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
      <ProfileList />
    </div>


  </div>
)
;

export default Search;