import React, { useRef, useEffect, useState } from 'react';
import './style.scss';
import { Link } from "react-router-dom";

const DiscussionCreator = (creator ,{handleMessage}) => {
    
    console.log("CREATOR",creator)
    const ref = useRef(null)
    //State du menu burger
    const [menuState, setMenuState] = useState(false);
    //ecouteur d'évenement
    useEffect(
      () => {
        document.addEventListener('click', handleClick)
        return () => {
          document.removeEventListener('click',handleClick) 
          }
      }, [menuState]);
    //fonction pour l'écouteur  
    const handleClick = (e) => {
      ref.current == e.target && !menuState? 
      setMenuState(true):
      setMenuState(false);
    }
    
    return(
    <div >         
      <div className="discussion__container">
            <h3 className="discussion__spaceText"><Link to={`/profile/${creator.creator.id}`}>
              <span>{creator.receiver.firstname}</span>
              <span className=""> {creator.receiver.lastname}</span> </Link>: <span> {creator.announcement.title}</span></h3>
          <button ref ={ref} className="discussion__button" >+</button>          
      </div>
      {menuState && (      
      creator.messages.map((message) => (
      
      <div key={message.id} className="message__container">
        <div className={creator.creator.firstname == message.user.firstname?"you":"other"}> 
          <h4 className="">{creator.creator.firstname == message.user.firstname?"Vous":message.user.firstname} : </h4>               
          <p>{message.content}</p>
        </div>
      </div>     
      )),
     

<textarea rows="5" cols="33">
It was a dark and stormy night...
</textarea>
      
      )}


  </div> 
  )}

export default DiscussionCreator;