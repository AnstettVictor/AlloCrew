import React from 'react';
import './style.scss';
import Profile from './HomeProfile';
import Announcement from './Announcement';

const Home = () => (
  <div className="home__container">
    <div className="home__left">
      <div className="home__profile">
        <Profile />
      </div>
      <div className="home__news"/>
    </div>
    <div className="home__announcementlist">
      <ul className="home__navlink">
        <li className="home__navlink-links">Bénévoles</li>
        <li className="home__navlink-links">Rémunérées</li>
        <li className="home__navlink-links">Toutes les annonces</li>
      </ul>
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
    </div>
  </div>
)
;

export default Home;