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
      {list.filter(list => list.voluntary === true).map(filteredList => (
        console.log('voluntary', filteredList)
      ))}
      {list.filter(list => list.voluntary === false).map(filteredList => (
        console.log('paid', filteredList)
      ))}
      {list.map(filteredList => (
        console.log('all', filteredList)
      ))}
      {list.filter(list => list.user.id === userId).map(filteredList => (
        console.log('mine', filteredList)
      ))}

      {filter == 'volunteer' && console.log('volunteer')}
      {filter == 'paid' && console.log('paid')}
      {filter == 'all' && console.log('all')}
      {filter == 'my' && console.log('my')}
    </div>
  </div>
)}
;

export default Home;

