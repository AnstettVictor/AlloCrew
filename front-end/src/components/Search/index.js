import React, { useState } from 'react';
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

  const Search = ({ announceList, profileList }) => {
  const [searchSwitch, setSearchSwitch] = useState(true);
  const [filter, setFilter] = useState();
  return (
    <div>

      <div className="search__header">

        <p onClick={() => setSearchSwitch(true)}>Rechercher une annonce</p>
        <p onClick={() => setSearchSwitch(false)}>Rechercher un profil</p>
        {/* !!!!!!!!!!!!!!!!!!!!!!Not FINISHED!!!!!!!!!!!!!!!!!!!!!! */}
        <form className="search__form" onSubmit={(event) => {event.preventDefault(); console.log(filter)}}>
          <input className="search__input" placeholder="Rechercher..." type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <input style={{ backgroundImage: `url(${searchlogo})` }} className=" search__button" type="submit" />
        </form>
      </div>

      <div className="announcementList">
        {
          searchSwitch && <AnnouncementList list={filter? announceList.filter(one => one.title.toLowerCase().includes(filter.toLowerCase())): announceList} />
        }
        {
          !searchSwitch && <ProfileList list={filter? profileList.filter(one => one.firstname.toLowerCase().includes(filter.toLowerCase())): profileList} />
        }
      </div>
    </div>
  )
};

export default Search;