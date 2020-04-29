import React from 'react';
import './style.scss';
import Profile from './Profile';
import PropTypes from 'prop-types';

const ProfileList = ({ list }) => (
  <div className="search">
    {
      list.map((profile) => <Profile key={profile.id} {...profile}/>)
    }
  </div>
)
;

ProfileList.propTypes ={
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
  })
}

export default ProfileList; 