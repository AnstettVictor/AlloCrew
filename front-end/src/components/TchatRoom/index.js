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
      <div className="tchatRoom__Chat-Container">
        {/* Subject of conversation (title annonce) */}
        <div className="tchatRoom__Chat-Info">
          <img className="tchatRoom__Chat-Annonce-Avatar"  alt="annonce avatar" />
         
        </div>
        {/* TODO!!!!!!!!================== */}
        <div className="tchatRoom__Chat-Messages-Block">
          {/* Message Received Block */}
          <div className="tchatRoom__Chat-Message-Received">
            <div className="tchatRoom__Chat-Card-Received">
              <img className="tchatRoom__Chat-Card-ProfilAvatar"  alt="profile avatar" />
              <h4 className="tchatRoom__Chat-Card-Author">Prenom</h4>
            </div>
            <p className="tchatRoom__Chat-Message-Received-Content speech-bubble">Message Received</p>
          </div>
          {/* End of Message Received Block */}

          {/* Message Sended Block */}
          <div className="tchatRoom__Chat-Message-Sended">
            <p className="tchatRoom__Chat-Message-Sended-Content">Message Sended</p>
            <div className="tchatRoom__Chat-Card-Sended">
              <img className="tchatRoom__Chat-Card-ProfilAvatar" alt="profile avatar" />
              <h4 className="tchatRoom__Chat-Card-Author">Prenom</h4>
            </div>
          </div>
          {/* End of Message Sended Block */}

          {/* New message area */}

          {/* End of new message area */}
        </div>

      </div>
      {/* ========= End of Chat Container ========= */}

    </div>

);


export default TchatRoom;
