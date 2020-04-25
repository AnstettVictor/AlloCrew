import React from 'react';
import './style.scss';

const Discussion = (creator, receiver) => (
    <div className="tchatRoom__Tchat-Container">

        <aside className="tchatRoom__Conversations-Container">    
        <h2 className="tchatRoom__Conversations-Title">Conversations</h2>

        <div className="tchatRoom__Conversations-List">
            
                <div className="tchatRoom__Conversations-Card">
                <div className="tchatRoom__Conversations-Card-AvatarAutorTitle">
                    <div className="tchatRoom__Conversations-Card-AvatarAuthorTitle-NameAndTitle">
                        <h3 className="tchatRoom__Conversations-Card-Author">{creator.creator.firstname} <span className="tchatRoom__Conversations-Card-Author-Span">{creator.creator.lastname}</span></h3>
                        <h4 className="tchatRoom__Conversations-Card-TitleAnnonce">{creator.announcement.title}</h4>
                    </div>
                </div>
            </div>
        </div>
        
        </aside>
    </div>
    
)

export default Discussion;