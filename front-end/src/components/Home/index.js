import React from 'react';

//import local
import './style.scss';
import Profile from './HomeProfile';
import AnnouncementList from '../AnnouncementList';

const Home = ({list, homeProfile, userId}) => (
  <div className="home__container">
    <div className="home__left">
      <div className="home__profile">
        <Profile {...homeProfile} id={userId} />
      </div>
      <div className="home__news" />
    </div>
    <div className="home__list">
      <ul className="home__navlink">
        <li className="home__navlink-links">Bénévoles</li>
        <li className="home__navlink-links">Rémunérées</li>
        <li className="home__navlink-links">Toutes les annonces</li>
        <li className="home__navlink-links">Mes annonces</li>
      </ul>
      
     <AnnouncementList list={list} />

    </div>
  </div>
)
;

export default Home;

