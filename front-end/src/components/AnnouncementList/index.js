import React from 'react';
import './style.scss';
import Announce from './Announce';
import Proptypes from 'prop-types';

const AnnouncementList = ({list}) => (
  <>
  <Announce/>
  <Announce/>
  <Announce/>
  <Announce/>
  <Announce/>
  <Announce/>
  </>
)
;

AnnouncementList.propTypes = {   
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: Proptypes.string.isRequired,
      location: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      picture: Proptypes.string.isRequired,
      voluntary: Proptypes.bool.isRequired,
      id: Proptypes.number.isRequired,
      dateStart: Proptypes.string.isRequired,
      dateEnd: Proptypes.string.isRequired, 
      active: Proptypes.bool.isRequired,
      createdAt: Proptypes.string.isRequired,
      user: Proptypes.shape({
          id: Proptypes.number.isRequired,
          firstname: Proptypes.string.isRequired,
          lastname: Proptypes.string.isRequired,
          picture: Proptypes.string.isRequired,
      })      
    }),
  ).isRequired,
}

export default AnnouncementList;