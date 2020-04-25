import React from 'react';
import './style.scss';
import DiscussionReceiver from './DiscussionReceiver';

const DiscussionListReceiver = ({list, userId}) => (
  <> 
    { console.log("list",{list}),
      list.map((discussion) =>
      <DiscussionReceiver key={discussion.id} {...discussion}/>)
    }
  </>
)
;


export default DiscussionListReceiver;