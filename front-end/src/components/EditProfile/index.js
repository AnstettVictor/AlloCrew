import React, { Component } from 'react';
import './style.scss';
import Accept from './DropZone';
import { Editor } from 'react-draft-wysiwyg';
import Proptypes from 'prop-types';


const EditProfile = ({id, title, firstname, lastname, age, location, description, experience, portfolio }) => (
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
      <input type="number" className="editProfile__age input" placeholder="votre âge">{age} </input>
      <input type="text" className="editProfile__place input" placeholder="Lieu actuel">{location}</input>
      <input type="text" className="editProfile__firstname input" placeholder="Prénom">{firstname}</input>
      <input type="text" className="editProfile__lastname input" placeholder="Nom">{lastname}</input>   
    </div>
    <input type="text" className="editProfile__job input" placeholder="Votre poste">{title}</input>
    <div className="editProfile__text">    
    </div>
    
      <div>
        <h3 className="editProfile__description">Description</h3>
        <div className="editor input">
        <Editor description={description}/>
        </div>
      </div>
      <div>
        <h3 className="editProfile__exp">Expérience</h3>
        <div className="editor input">
        <Editor experience={experience} />
        </div>
      </div>
      <p className="editProfile__portfolio">Portfolio:</p>
      <input type="text" className="editProfile__link input" placeholder="www.jaimeleschips.com">{portfolio}</input>
      
    </div>
  </form>
  </div>
  
)
;

EditProfile.propTypes = {   
  title: Proptypes.string.isRequired,
  firstname: Proptypes.string.isRequired,
  lastname: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  bannerpicture: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  portfolio: Proptypes.string.isRequired,
  experience: Proptypes.string.isRequired, 
  description: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  age: Proptypes.number.isRequired,
}

export default EditProfile;