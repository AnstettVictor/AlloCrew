import React, { useRef, useEffect, useState } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import Message from './Message'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
      console.log("click",ref.current.id)
      ref.current.id == e.target.id?setMenuState(true):setMenuState(false);
      
      
      
    }
    
    return(
    <div >        

      <div className="discussion__container">

        <h3 className="discussion__spaceText"><Link to={`/profile/${creator.creator.id}`}>
          <span>{creator.receiver.firstname}</span>
          <span className=""> {creator.receiver.lastname}</span> </Link>: <span> {creator.announcement.title}</span></h3>

        <button ref={ref} id={creator.id} onClick={handleClick} className={`discussion__button ${creator.id}`} >+</button> 

      </div>

      {menuState && (   
      <div>   
        <Message key={creator.receiver.id} test={creator.messages}/>
    
        <CKEditor className="editor" editor={ClassicEditor} data="" config={{
                    removePlugins: [ 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed', 'TableToolbar', 'Table', 'Indent' ],
                  }}
                />
      </div>
      )} 
    </div>
  )}

export default DiscussionCreator;