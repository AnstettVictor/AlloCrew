import React from 'react';
import './style.scss';
import Discussion from './Discussion';

const DiscussionList = ({list, userId}) => (
  <> 
    { console.log("list",{list}),
      list.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((discussion) =>
      <Discussion key={discussion.id} {...discussion}/>)
    }
  </>
)
;


export default DiscussionList;