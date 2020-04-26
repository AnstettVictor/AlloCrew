import React, { useRef, useState } from "react";
import './style.scss';

import { Link } from "react-router-dom";

const DiscussionList = ({by_creator, by_receiver, message, handleMessage, onMessageSubmit,userId}) => {
  

  const ref = useRef(null)
  //State du menu burger
  const [menuState, setMenuState] = useState(false);
  //ecouteur d'évenement
  console.log(menuState)
 
  //fonction pour l'écouteur  
  const handleClick = (e) => {
    setMenuState(e.target.id)
    if (menuState == e.target.id){
      setMenuState(false)
     
    }
   }
  
  
  return (
  <div className="discussion__flex"> 
    <div className="discussion__half">
      <h2 className="discussion__title">Discussions reçus par rapport à vos offres</h2>



    {
      by_creator.map((discussion) =>
      <div key={discussion.id}>
        <h3 className="discussion__spaceText">
          <Link to={`/profile/${discussion.receiver.id}`}>
            <span>{discussion.receiver.firstname}</span>
            <span className=""> {discussion.receiver.lastname}</span> 
          </Link>
        </h3> 
        <h4> {discussion.announcement.title}</h4>
      
        <button ref={ref} id={discussion.id} className="button" onClick={handleClick} >+</button>
      {menuState == discussion.id && (
      <div> 
        <div className="message__container">
        {discussion.messages.map((messages) => 
          <div key={messages.id} className={messages.user.id == discussion.creator.id? "you":"other"}>
            <h4>{messages.user.id == discussion.creator.id? "Vous": messages.user.firstname} : </h4>               
            <p>{messages.content}</p>
          </div>
        )}
        </div>

        <div className="message__input__flex">
          <form onSubmit={onMessageSubmit} method="post" name={discussion.id}>
            <div>
              <textarea className="message__textarea input" name={discussion.id} value={message} onChange={handleMessage} />
            </div>
            <div>
              <button className="button" type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
    )}
    </div>
    )}
  </div>

  <div className="discussion__half">
  <h2 className="discussion__title">Discussions ouvertes par rapport à une offre</h2>


    { console.log("list",{by_creator}),
      by_receiver.map((discussion) =>
      <div key={discussion.id}>
        <h3 className="discussion__spaceText"><Link to={`/profile/${discussion.creator.id}`}>
          <span>{discussion.creator.firstname}</span>
          <span className=""> {discussion.creator.lastname}</span> </Link></h3> 
          <h4> {discussion.announcement.title}</h4>
        <button  className="button"  >+</button> 
          
      <div  className="message__container">
      {
        discussion.messages.map((messages) =>  

        <div key={messages.id}  className={messages.user.id == discussion.receiver.id? "you":"other"}>
          <h4>{messages.user.id == discussion.receiver.id? "Vous": messages.user.firstname} : </h4>               
          <p>{messages.content}</p>
        </div>
       
      )}

      </div>

      <div className="message__input__flex">
        
        <form onSubmit={onMessageSubmit} method="post" >
        <div>
          {console.log("DISCUSSIONIDTEXTAREA", discussion.id)}
          <textarea className="message__textarea input"  name={discussion.id} value={message} onChange={handleMessage} />
        </div>
        <div>
          <button ref={ref} className="button" name={discussion.id} type="submit">SEND</button>
        </div>
        </form>
      </div>

     </div>)   
    }
  </div>
  </div>
)}
;


export default DiscussionList;