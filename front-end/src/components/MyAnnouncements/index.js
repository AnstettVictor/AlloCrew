import React from 'react';
import './style.scss';
import AnnouncementList from '../AnnouncementList';

const MyAnnouncements = ({list, userId}) => (
  <div className="myAnnouncements">
    <h1>Mes annonces</h1>
    <div className="myAnnouncements__container">
      
      <AnnouncementList list={list.filter(one => one.user.id == userId)} userId={userId}/>
    </div>
  </div>
)
;



export default MyAnnouncements;