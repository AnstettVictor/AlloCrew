import React, { Component } from 'react';
import './style.scss';
import Accept from './DropZone';
import { Editor } from 'react-draft-wysiwyg';
import PropTypes from 'prop-types';

const EditProfile = ({id, title, firstname, lastname, age, location, description, experience, portfolio, bannerpicture, picture, handleChange }) => (
 <div>
  <form action="submit" method="post" >
      <div className="editProfile__container">    
        <div className="editProfile__pict">
          <button className="editProfile__button button">Enregistrer</button>
          <button className="editProfile__buttonRetour button">Retour</button>
          <div className="editProfile__pict__cover" style={{backgroundImage: `url(${bannerpicture})`}}>
          <Accept />
        </div>
        <div className="editProfile__pict__editProfile" style={{backgroundImage: `url(${picture})`}}>
          <Accept />
        </div>
      </div>
      <div> 
        <input onChange={handleChange} value={age} name="age" type="number" className="editProfile__age input" placeholder={age?age:"Votre âge"}/>
        <input onChange={handleChange} value={location} name="location" type="text" className="editProfile__place input" placeholder={location?location :"Votre ville"}/>
        <input onChange={handleChange} value={firstname} name="firstname" type="text" className="editProfile__firstname input" placeholder={firstname?firstname :"Prénom"}/>
        <input onChange={handleChange} value={lastname} name="lastname" type="text" className="editProfile__lastname input" placeholder={lastname?lastname :"Nom"} />
      </div>
      <input onChange={handleChange} value={title} name="title" type="text" className="editProfile__job input" placeholder={title?title :"Votre profession"}/>           
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
        <input onChange={handleChange} name="portfolio" type="text" className="editProfile__link input"  value={portfolio} placeholder={portfolio?portfolio :"Lien vers votre book, votre bande-démo, etc..."}/>     
      </div>
    </form>
  </div>
  
)
;

EditProfile.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.number,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,  
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  bannerpicture: PropTypes.string.isRequired,
}

export default EditProfile;