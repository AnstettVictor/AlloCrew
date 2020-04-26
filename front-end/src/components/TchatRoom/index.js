import React from 'react';
import './style.scss';

import DiscussionListCreator from './DiscussionListCreator'
import DiscussionListReceiver from './DiscussionListReceiver'

const TchatRoom = ({by_creator, by_receiver, userId}) => (
  <div className="tchatRoom__Container">
    {/* Page title */}
    <h1 className="tchatRoom__TitlePage">Messagerie</h1>

    {console.log("indexDISCUSSION",{by_creator}), console.log("userId",{by_receiver})}
    <DiscussionListCreator  list={by_creator}  userId={userId}/>
    <DiscussionListReceiver list={by_receiver}  userId={userId}/>
      {/*  ========= End of the list of conversations ========= */}

      {/* ================== Chat Container ================== */}
      
    </div>

);


export default TchatRoom;
