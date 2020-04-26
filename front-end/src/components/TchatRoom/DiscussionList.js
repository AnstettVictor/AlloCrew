import React from 'react';
import './style.scss';

import { Link } from "react-router-dom";

const DiscussionList = ({by_creator, by_receiver, message, handleMessage, onMessageSubmit,userId}) => (
  <> 
    <h3>DISCUTION RECU</h3>
    { console.log("list",{by_creator}),
      by_creator.map((discussion) =>
      <div key={discussion.id}>
      <h3 className="discussion__spaceText"><Link to={`/profile/${discussion.receiver.id}`}>
        <span>{discussion.receiver.firstname}</span>
        <span className=""> {discussion.receiver.lastname}</span> </Link></h3> 
        <h4> {discussion.announcement.title}</h4>
      <button  className="discussion__button"  >+</button>

      {
        discussion.messages.map((messages) =>  
        <div key={messages.id} className="message__container">
          <div > 
            <h4 className="">{messages.user.firstname} : </h4>               
            <p>{messages.content}</p>
          </div>
        </div>
      )}
      <form onSubmit={onMessageSubmit} method="post" id={discussion.id}>
        {console.log("DISCUSSIONIDTEXTAREA", discussion.id)}
        <textarea id={discussion.id} name={discussion.id} value={message} onChange={handleMessage} rows="5" cols="33"/>
        <button id={discussion.id} type="submit">SEND</button>
      </form>

     </div>)
    }

<h3>DISCUTION CREE</h3>
    { console.log("list",{by_creator}),
      by_receiver.map((discussion) =>
      <div key={discussion.id}>
        <h3 className="discussion__spaceText"><Link to={`/profile/${discussion.creator.id}`}>
          <span>{discussion.creator.firstname}</span>
          <span className=""> {discussion.creator.lastname}</span> </Link></h3> 
          <h4> {discussion.announcement.title}</h4>
        <button  className="discussion__button"  >+</button> 

      {
        discussion.messages.map((messages) =>  
        <div key={messages.id} className="message__container">
          <div > 
            <h4 className="">{messages.user.firstname} : </h4>               
            <p>{messages.content}</p>
          </div>
        </div>
      )}
    <form onSubmit={onMessageSubmit} method="post" id={discussion.id}>
        {console.log("DISCUSSIONIDTEXTAREA", discussion.id)}
        <textarea id={discussion.id} name={discussion.id} value={message} onChange={handleMessage} rows="5" cols="33"/>
        <button id={discussion.id} type="submit">SEND</button>
      </form>

    </div>)
    }
  </>
)
;


export default DiscussionList;