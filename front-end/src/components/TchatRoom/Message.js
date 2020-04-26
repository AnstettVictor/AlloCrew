import React from 'react';
import './style.scss';

const Message = ({test}) => (
  test.map((message) => (    
    <div key={message.id} className="message__container">
        <div > 
        <h4 className="">{message.user.firstname} : </h4>               
        <p>{message.content}</p>
        </div>
    </div>     
  ))      
)

export default Message;