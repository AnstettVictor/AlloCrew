import React from 'react';
import './style.scss';

const EditUser = () => (
  <div>
    <div className="editUser__pict">
      <button className="editUser__button button">Enregistrer</button>
      <button className="editUser__buttonRetour button">Retour</button>
      <img className="editUser__pict__cover" />
      <img className="editUser__pict__profile" src="https://cannabisnow.com/wp-content/uploads/2018/09/Elon-Musk-Joe-Rogan.jpg" />
    </div>
    <div className="editUser__info">      
        <h4 className="editUser__age">45 ans </h4>
        <h4 className="editUser__place">Paris</h4>        
    </div>    
    <h3 className="editUser__name">Ludovic Argenty</h3>
    <h4 className="editUser__age desktop">45 ans - Paris </h4>
        
    <h2 className="editUser__title">Opérateur de Prise de vue</h2>
    <div className="editUser__text">    
    </div>
    <form action="submit" method="post">
      <h4 className="editUser__titles desktop ">Ancien mot de passe:</h4>
      <input type="text" placeholder="ancien mot de passe" className="editUser__input input"/>
      <h4 className="editUser__titles desktop ">Nouveau mot de passe:</h4>
      <input type="text" placeholder="nouveau mot de passe" className="editUser__input input"/>
      <h4 className="editUser__titles desktop ">Retapez votre nouveau mot de passe:</h4>
      <input type="text" placeholder="Retapez votre nouveau mot de passe" className="editUser__input input"/><br/>
      <button className="editUser__mdp button">Modifier mon mot de passe</button>
    </form>
    <form action="submit" method="post">
      <h4 className="editUser__titles desktop ">Ancienne adresse email:</h4>
      <input type="text" placeholder="Ancienne adresse email" className="editUser__input input"/>
      <h4 className="editUser__titles desktop ">Nouvelle adresse email:</h4>
      <input type="text" placeholder="Nouvelle adresse email" className="editUser__input input"/><br/>
      <button className="editUser__mdp button">Modifier mon adresse email</button>
    </form>
    


  </div>
)
;

export default EditUser;