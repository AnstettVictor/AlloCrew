import React from 'react';
import './style.scss';
import AnnouncementList from '../AnnouncementList';

const MyAnnouncements = () => (
  <div className="myAnnouncements">
    <h1>Mes annonces</h1>
    <div className="myAnnouncements__container">
      
      <AnnouncementList />
    </div>
  </div>
)
;

export default MyAnnouncements;