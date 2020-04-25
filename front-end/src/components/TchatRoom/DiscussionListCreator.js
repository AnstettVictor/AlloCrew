import React from 'react';
import './style.scss';
import DiscussionCreator from './DiscussionCreator';

const DiscussionListCreator = ({list, userId}) => (
  <> 
    { console.log("list",{list}),
      list.map((discussion) =>
      <DiscussionCreator key={discussion.id} {...discussion}/>)
    }
  </>
)
;


export default DiscussionListCreator;