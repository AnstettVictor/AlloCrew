import React from 'react';
import './style.scss';
import Announce from './Announce';
import PropTypes from 'prop-types';

const AnnouncementList = ({ list }) => (

  <div className="announcementList__container">
    
    {
      list.sort(
        ({ id: previousID }, { id: currentID }) => currentID - previousID).map((announcement) => <Announce key={announcement.id} {...announcement}/>
      )
    }

  </div>
)
;

AnnouncementList.propTypes = {   
  list: PropTypes.array.isRequired,
}


export default AnnouncementList;