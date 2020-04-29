import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import searchlogo from 'images/svg/search.svg';
import AnnouncementList from '../AnnouncementList';
import ProfileList from './ProfileList';

const Search = ( { announceList, profileList }) => {

  const [searchSwitch, setSearchSwitch] = useState(true);
  const [filter, setFilter] = useState();

  return (
    <div>

      <div className="search__header">
        {/* switcher betwheen Search annonce and Search profile  */}
        <button className="button" type="button" onClick={() => setSearchSwitch(true)}>Rechercher une annonce</button>
        <button className="button" type="button" onClick={() => setSearchSwitch(false)}>Rechercher un profil</button>

        <form className="search__form" onSubmit={(event) => { event.preventDefault() }}>
          <input className="search__input" placeholder="Rechercher..." type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <span>
            <input style={{ backgroundImage: `url(${searchlogo})` }} className=" search__button" type="submit" />
          </span>
        </form>

      </div>

      {/* if SearchSwitch is true, Search an annonce, if false, search an profile */}
      <div className="announcementList">
        {console.log("announceList", announceList)}
        {searchSwitch && <AnnouncementList list={filter ? announceList.filter((one) => one.title.toLowerCase().includes(filter.toLowerCase())) : announceList} />}
        {console.log("ProfileList", profileList)}
        {!searchSwitch && <ProfileList list={filter ? profileList.filter((one) => one.firstname.toLowerCase().includes(filter.toLowerCase())) : profileList} />}
      </div>
    </div>
  );
};

Search.propTypes = {
  announceList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    filter: PropTypes.string,
  }).isRequired,
  profileList: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    filter: PropTypes.string,
  }).isRequired,
};

export default Search;
