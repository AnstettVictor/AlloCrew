import React from 'react';
import './style.scss';
import Profile from './Profile';

const ProfileList = () => (
  <div className="profilelist__container">
    <Profile />
    <Profile />
    <Profile />
    <Profile />
  </div>
)
;

export default ProfileList;