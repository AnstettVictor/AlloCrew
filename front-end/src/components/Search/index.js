import React, {useState} from 'react';
import './style.scss';
import searchlogo from 'images/svg/search.svg';
import AnnouncementList from '../AnnouncementList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ProfileList from './ProfileList';

const Search = ({announceList, profileList}) => {
  const [searchSwitch, setSearchSwitch] = useState(true);
  return (
  <div>

    <div className="search__header">
     
          <p onClick={() => setSearchSwitch(true)}>Rechercher une annonce</p>
          <p onClick={() => setSearchSwitch(false)}>Rechercher un profil</p>
        
        <form className="search__form">
            <input className=" search__input" placeholder="Rechercher..."/>
            <input style={{backgroundImage: `url(${searchlogo})` }} className=" search__button" type="submit" value="." 
            />
        </form>
    </div>
    
    <div className="announcementList">
      {searchSwitch? <AnnouncementList list={announceList} /> : <ProfileList list={profileList} />} 
    </div>
  </div>
)
};

export default Search;