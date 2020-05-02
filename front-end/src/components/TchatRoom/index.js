import React, {useState, useRef, useEffect} from 'react';
import './style.scss';

const TchatRoom = ({chatList, userId, onMessageSubmit, handleMessage, content, deleteD, refreshData}) => {


  const [chatId, setChatId] = useState("");
  const currentChat = chatList.find(e => e.id == chatId)
  const messageArea = useRef(null);
  if (messageArea.current){console.log(messageArea.current.clientHeight)}
  
  useEffect(() => {
    if (messageArea.current){messageArea.current.scrollTo(0, messageArea.current.scrollHeight)}
  }, [chatList, chatId])

  useEffect( () => {
    setTimeout(refreshData, 3000);
    return clearTimeout();
  },[])

  return (
    <>
      <h1 className="tchatRoom__title">Messagerie</h1>
      <div className="tchatRoom__container">
        
        <div className="discussion__container">
          <p className="sticky">Conversations en cours</p>

          {
            chatList.map(chat => 
              (<div className={chat.id == chatId? 'discussion active': 'discussion'}>
                <div className="discussion__name" onClick={() => setChatId(chat.id)} >
                  <p className="contactName">
                    {chat.creator.id !== userId? 
                    `${chat.creator.firstname} ${chat.creator.lastname}`:
                    `${chat.receiver.firstname} ${chat.receiver.lastname}`}
                  </p>
                  <p>Annonce: {chat.announcement.title.substr(0, 20)}...</p>
                </div>
                <div className="deleteChat" onClick={() => {setChatId(""); deleteD(chat.id)}} >
                  Supprimer
                </div>
              </div>)
            )
          }
        </div>
        <div ref={messageArea} className={chatId? "message openedChat": "message"}>
          {!chatId && <div className="emptyChat" >
              <h2>Bienvenue dans votre messagerie</h2>
              {!chatList.length && <p>Vous n'avez pas de conversation en cours.</p>}
              {chatList.length == 1 && <p>Vous avez 1 conversation en cours.</p>}
              {chatList.length > 1 && <p>{`Vous avez ${chatList.length} conversations en cours.`}</p>}
              
              <p>Sélectionnez ou ajoutez une conversation pour commencer à discuter</p>
            </div>}
          {
            chatId && currentChat.messages.map(message => {
              if(message.user.id == userId){
                return (
                  <div className="userMessage__container">
                    <p>Vous</p>
                    <p className="userMessage">{message.content}</p>
                  </div>
                )
              }else{
                return (
                  <div className="contactMessage__container">
                    <p>{message.user.firstname}</p>
                    <p className="contactMessage">{message.content}</p>
                  </div>
                )
              }
            })
          }
        </div>
        {/* input.. */}
        <form id={chatId} onSubmit={onMessageSubmit} className="message__input">
          <input onChange={handleMessage} value={content}  type="text" placeholder="Envoyez un message" />
          <button className="" type="submit" />
        </form>

      </div>
    </>
  )
};


export default TchatRoom;
