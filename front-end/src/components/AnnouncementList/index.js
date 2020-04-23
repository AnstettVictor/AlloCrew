import React from 'react';
import './style.scss';
import Announce from './Announce';
import Proptypes from 'prop-types';

const AnnouncementList = ({list, userId}) => (
  <> 
    {
      list.map((announcement) => <Announce key={announcement.id} {...announcement}/>)
    }
  </>
)
;

AnnouncementList.propTypes = {   
  list: Proptypes.array.isRequired,
}


export default AnnouncementList;