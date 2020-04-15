import React from 'react';
import './style.scss';
import searchlogo from 'images/svg/search.svg';
import AnnouncementList from '../AnnouncementList';

const Search = () => (
  <div>

    <div className="search__header">
     
          <p>Rechercher une annonce</p>
          <p>Rechercher un profil</p>
        
        <form>
          <input className=" search__input" />
          <input style={{backgroundImage: `url(${searchlogo})` }} className=" search__button" type="submit" 
          />
        </form>
    </div>
    
    <div className="announcementList">
      <AnnouncementList />
    </div>


  </div>
)
;

export default Search;