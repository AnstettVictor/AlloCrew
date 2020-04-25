import React from 'react';
import './style.scss';
import { Link } from "react-router-dom";

const DiscussionCreator = (creator) => {
    
    console.log("CREATOR",creator)
    
    return(
    <div > 
        <div className="tchatRoom__Conversations-Card-AvatarAutorTitle">
            <div className="tchatRoom__Conversations-Card-AvatarAuthorTitle-NameAndTitle">
            <Link to={`/profile/${creator.receiver.id}`}><h3 className="tchatRoom__Conversations-Card-Author">{creator.receiver.firstname} <span className="tchatRoom__Conversations-Card-Author-Span">{creator.receiver.lastname}</span></h3></Link>
            <Link to={`/announcement/${creator.announcement.id}`}> <h4 className="tchatRoom__Conversations-Card-TitleAnnonce">{creator.announcement.title}</h4></Link>
            <button className="button" >+</button>
            </div>
        </div>
    </div>
)}

export default DiscussionCreator;