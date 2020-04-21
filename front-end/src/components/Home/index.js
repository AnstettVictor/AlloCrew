import React, {useState} from 'react';

//import local
import './style.scss';
import Profile from './HomeProfile';
import AnnouncementList from '../AnnouncementList';

const Home = ({list, homeProfile, userId, logout}) => {

const [filter, setFilter] = useState('all')
return (
  <div className="home__container">
    <div className="home__left">
      <div className="home__profile">
        <Profile {...homeProfile} id={userId} logout={logout} />
      </div>
      <div className="home__news" />
    </div>
    <div className="home__list">
      <ul className="home__navlink">
        <li className="home__navlink-links" onClick={() => setFilter('voluntary')}>Bénévoles</li>
        <li className="home__navlink-links" onClick={() => setFilter('paid')}>Rémunérées</li>
        <li className="home__navlink-links" onClick={() => setFilter('all')}>Toutes les annonces</li>
        <li className="home__navlink-links" onClick={() => setFilter('my')}>Mes annonces</li>
      </ul> 
      {filter === 'voluntary' && <AnnouncementList list={list.filter(one => one.voluntary === true)}/>}
      {filter === 'paid' && <AnnouncementList list={list.filter(one => one.voluntary === false)}/>}
      {filter === 'all' && <AnnouncementList list={list.map(one => one)} />}
      {filter === 'my' && <AnnouncementList list={list.filter(one => one.user.id === userId)}/>}
    </div>
  </div>
)}
;

export default Home;

