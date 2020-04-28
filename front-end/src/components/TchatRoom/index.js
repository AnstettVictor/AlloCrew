import React from 'react';
import './style.scss';

import DiscussionList from './DiscussionList'

const TchatRoom = (state,{userId}) => (
  <div className="tchatRoom__Container">
    {console.log("STATEINDEXROOM", state)}
    <h1 className="tchatRoom__TitlePage">Messagerie</h1>
    <div className="tchatRoom__flex">
      <div className="discussion__container">
        {console.log("state",state)}
        <DiscussionList   {...state}  userId={userId}/>
      </div>

      <div className="message__container">
        
      </div>
    </div> 

  </div>

);


export default TchatRoom;
