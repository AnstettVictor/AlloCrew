import React, { Component } from 'react';
import './style.scss';
import Accept from './DropZone';
import { Editor } from 'react-draft-wysiwyg';

const EditProfile = () => (
 <div>
 <form action="submit" method="post" >
  <div className="editProfile__container">    
      <div className="editProfile__pict">
        <button className="editProfile__button button">Enregistrer</button>
        <button className="editProfile__buttonRetour button">Retour</button>
        <div className="editProfile__pict__cover">
        <Accept />
        </div>
        <div className="editProfile__pict__editProfile">
        <Accept />
        </div>
      </div>
    <div> 
      <input type="number" className="editProfile__age input" placeholder="votre âge"/>
      <input type="text" className="editProfile__place input" placeholder="Lieu actuel"/>
      <input type="text" className="editProfile__firstname input" placeholder="Prénom"/>
      <input type="text" className="editProfile__lastname input" placeholder="Nom"/>      
    </div>
    <input type="text" className="editProfile__job input" placeholder="Votre poste"/>
    <div className="editProfile__text">    
    </div>
    
      <div>
        <h3 className="editProfile__description">Description</h3>
        <div className="editor">
        <Editor />
        </div>
      </div>
      <div>
        <h3 className="editProfile__exp">Expérience</h3>
        <div className="editor">
        <Editor />
        </div>
      </div>
      <p className="editProfile__portfolio">Portfolio:</p>
      <input type="text" className="editProfile__link input" placeholder="www.jaimeleschips.com"/>
      
    </div>
  </form>
  </div>
  
)
;

export default EditProfile;