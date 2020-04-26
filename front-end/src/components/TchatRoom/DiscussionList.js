import React from 'react';
import './style.scss';

import { Link } from "react-router-dom";

const DiscussionList = ({by_creator, by_receiver, message, handleMessage,userId}) => (
  <> 
    <h3>DISCUTION CREE</h3>
    { console.log("list",{by_creator}),
      by_creator.map((discussion) =>
      <div key={discussion.id}>
      <h3 className="discussion__spaceText"><Link to={`/profile/${discussion.creator.id}`}>
        <span>{discussion.receiver.firstname}</span>
        <span className=""> {discussion.receiver.lastname}</span> </Link></h3> 
        <h4> {discussion.announcement.title}</h4>
      <button  className="discussion__button"  >+</button>

      {
        discussion.messages.map((message) =>  
        <div key={message.id} className="message__container">
          <div > 
            <h4 className="">{message.user.firstname} : </h4>               
            <p>{message.content}</p>
          </div>
        </div>
      )}
      {console.log("DISCUSSIONIDTEXTAREA", discussion.id)}
      <textarea id={discussion.id} name={discussion.id} value={message.content} onChange={handleMessage} rows="5" cols="33"/>
      <button type="submit">SEND</button>

     </div>)
    }

<h3>DISCUTION RECU</h3>
    { console.log("list",{by_creator}),
      by_receiver.map((discussion) =>
      <div key={discussion.id}>
        <h3 className="discussion__spaceText"><Link to={`/profile/${discussion.creator.id}`}>
          <span>{discussion.creator.firstname}</span>
          <span className=""> {discussion.creator.lastname}</span> </Link></h3> 
          <h4> {discussion.announcement.title}</h4>
        <button  className="discussion__button"  >+</button> 

      {
        discussion.messages.map((message) =>  
        <div key={message.id} className="message__container">
          <div > 
            <h4 className="">{message.user.firstname} : </h4>               
            <p>{message.content}</p>
          </div>
        </div>
      )}

      {console.log("DISCUSSIONIDTEXTAREA", discussion.id)}
      <textarea id={discussion.id} name="story" value="HELLO" rows="5" cols="33"/>
    
      <button type="submit">SEND</button>

    </div>)
    }
  </>
)
;


export default DiscussionList;