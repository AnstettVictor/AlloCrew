import React from 'react';
import './style.scss';
import { Link } from "react-router-dom";

const DiscussionReceiver = (creator) => {
    
    console.log("RECEIVER",creator)
    
    return(
    <div > 
        <div className="tchatRoom__Conversations-Card-AvatarAutorTitle">
            <div className="tchatRoom__Conversations-Card-AvatarAuthorTitle-NameAndTitle">
            <Link to={`/profile/${creator.creator.id}`}><h3 className="tchatRoom__Conversations-Card-Author">{creator.creator.firstname} <span className="tchatRoom__Conversations-Card-Author-Span">{creator.creator.lastname}</span></h3></Link>
            <Link to={`/announcement/${creator.announcement.id}`}><h4 className="tchatRoom__Conversations-Card-TitleAnnonce">{creator.announcement.title}</h4></Link>
            <button className="button" >+</button>
            </div>
        </div>
    </div>
    
)}

export default DiscussionReceiver;