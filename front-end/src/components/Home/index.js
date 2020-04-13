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
        <li>Dernieres annonces</li>
        <li>Mes favoris</li>
        <li>Rehercher une annonce</li>
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