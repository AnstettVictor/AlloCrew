import React from 'react';
import './style.scss';
import Announce from './Announce';
import Proptypes from 'prop-types';

const AnnouncementList = ({list, userId}) => (
  <> 
    { console.log("AnnouncementLIST",{list}),
      list.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((announcement) =>
      <Announce key={announcement.id} {...announcement}/>)
    }
  </>
)
;

AnnouncementList.propTypes = {   
  list: Proptypes.array.isRequired,
}


export default AnnouncementList;