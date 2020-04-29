import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


const EditUser = ({title, firstname, lastname, age, location, picture, bannerpicture, handleChange }) => (

  <div>
    <div className="editUser__pict">
      <button className="editUser__button button">Enregistrer</button>
      <button className="editUser__buttonRetour button">Retour</button>
      <img className="editUser__pict__cover" style={{backgroundImage: `url(${bannerpicture})`}}/>
      <img className="editUser__pict__profile" src={picture} />
    </div>

    <div className="editUser__info">      
        <h4 className="editUser__age">{age} ans </h4>
        <h4 className="editUser__place">{location}</h4>        
    </div>  

    <h3 className="editUser__name">{firstname} {lastname}</h3>
    <h4 className="editUser__age desktop">{age} ans - {location} </h4>        
    <h2 className="editUser__title">{title}</h2>

    <div className="editUser__text">    
    </div>

    <form action="submit" method="post">
      <h4 className="editUser__titles desktop ">Ancien mot de passe:</h4>
      <input onChange={handleChange} value="{oldPassword}" name="oldPassword" type="text" placeholder="ancien mot de passe" className="editUser__input input"/>
      <h4 className="editUser__titles desktop ">Nouveau mot de passe:</h4>
      <input onChange={handleChange} value="{newPassword}" name="newPassword" type="text" placeholder="nouveau mot de passe" className="editUser__input input"/>
      <h4 className="editUser__titles desktop ">Retapez votre nouveau mot de passe:</h4>
      <input onChange={handleChange} value="{verify}" name="verify" type="text" placeholder="Retapez votre nouveau mot de passe" className="editUser__input input"/><br/>
      <button className="editUser__mdp button">Modifier mon mot de passe</button>
    </form>

    <form action="submit" method="post">
      <h4 className="editUser__titles desktop ">Ancienne adresse email:</h4>
      <input onChange={handleChange} value="{oldMail}" name="oldMail" type="mail" placeholder="Ancienne adresse email" className="editUser__input input"/>
      <h4 className="editUser__titles desktop ">Nouvelle adresse email:</h4>
      <input onChange={handleChange} value="{newMail}" name="newMail" type="mail" placeholder="Nouvelle adresse email" className="editUser__input input"/><br/>
      <button className="editUser__mdp button">Modifier mon adresse email</button>
    </form>

  </div>
)
;

EditUser.propTypes = {
  handleChange: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,  
  title: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired,
  bannerpicture: PropTypes.string.isRequired,
}

export default EditUser;