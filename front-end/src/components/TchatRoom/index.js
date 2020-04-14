import React from 'react';
import './style.scss';
import Avatar from '../../assets/images/favicon.png';

const TchatRoom = () => (
  <div className="tchatRoom__Container">
    {/* Page title */}
    <h1 className="tchatRoom__TitlePage">Messagerie</h1>

    {/* the container for splitting in two sides the conversations and the chat */}
    <div className="tchatRoom__Tchat-Container">

      {/* ================== List of conversations block: ================== */}
      <aside className="tchatRoom__Conversations-Container">
        {/* Title of conversations block: */}
        <h2 className="tchatRoom__Conversations-Title">Conversations</h2>
        <div className="tchatRoom__Conversations-List">
          {/* Beginning of card */}
          <div className="tchatRoom__Conversations-Card">
            <div className="tchatRoom__Conversations-Card-AvatarAutorTitle">
              <img className="tchatRoom__Conversations-Card-AuthorAvatar" src={Avatar} alt="profile avatar" />
              <div className="tchatRoom__Conversations-Card-AvatarAuthorTitle-NameAndTitle">
                <h3 className="tchatRoom__Conversations-Card-Author">Prenom <span className="tchatRoom__Conversations-Card-Author-Span">Nom</span></h3>
                <h4 className="tchatRoom__Conversations-Card-TitleAnnonce">Title Annonce</h4>
              </div>
            </div>
            <div className="tchatRoom__Conversations-Card-PreviwAndTime">
              <p className="tchatRoom__Conversations-Card-Preview">Preview last Message...</p>
              <time className="tchatRoom__Conversations-Card-Time" dateTime="2020-04-14">Today</time>
            </div>
          </div>
          {/* End of card */}

        </div>
      </aside>
      {/*  ========= End of the list of conversations ========= */}

      {/* ================== Chat Container ================== */}
      <div className="tchatRoom__Chat-Container">
        {/* Subject of conversation (title annonce) */}
        <div className="tchatRoom__Chat-Info">
          <img className="tchatRoom__Chat-Annonce-Avatar" src={Avatar} alt="annonce avatar" />
          <h2><a className="tchatRoom__Chat-Annonce-Title" href="#">Annonce Title</a></h2>
        </div>

        {/* Message Received Block */}
        <div className="tchatRoom__Chat-Message-Received">
          <div className="tchatRoom__Chat-Card-Received">
            <img className="tchatRoom__Chat-Card-ProfilAvatar" src={Avatar} alt="profile avatar" />
            <h4 className="tchatRoom__Chat-Card-Author">Prenom</h4>
          </div>
          <p className="tchatRoom__Chat-Message-Received-Content">Message Received</p>
        </div>
        {/* End of Message Received Block */}

        {/* Message Sended Block */}
        <div className="tchatRoom__Chat-Message-Sended">
          <div className="tchatRoom__Chat-Card-Sended">
            <img className="tchatRoom__Chat-Card-ProfilAvatar" src={Avatar} alt="profile avatar" />
            <h4 className="tchatRoom__Chat-Card-Author">Prenom</h4>
          </div>
          <p className="tchatRoom__Chat-Message-Sended-Content">Message Received</p>
        </div>
        {/* End of Message Sended Block */}

        {/* New message area */}
        <div className="tchatRoom__Chat__Input-Container">
          <form onSubmit={console.log('This Form was submited')}>
            <label>
              <input className="tchatRoom__Chat__InputArea" type="text" value="Your Message here" onChange={console.log('this input was changed')} />
            </label>
            <input className="tchatRoom__Chat__Button button" type="submit" value="Sent" />
          </form>
        </div>
        {/* End of new message area */}

      </div>
      {/* ========= End of Chat Container ========= */}

    </div>
    {/* end of splitting */}

  </div>
);

export default TchatRoom;
