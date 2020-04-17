import React from 'react';
import './style.scss';
import Announce from './Announce';
import Proptypes from 'prop-types';

const AnnouncementList = ({list}) => (
  <> 
    {
      list.map((announcement) => <Announce {...announcement}/>)
    }
  </>
)
;



export default AnnouncementList;