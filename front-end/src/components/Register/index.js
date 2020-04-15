import React from 'react';
import './style.scss';

const Register = () => (
  <div className="register__container">
    <form className="register__form">
      <h1>Inscription</h1>
      <input className="register__input" type="mail" placeholder="Entrez votre adresse email"/> 
      <input className="register__input" type="mail" placeholder="Confirmez votre adresse email"/> 
      <input className="register__input" type="password" placeholder="Entrez votre mot de passe"/> 
      <input className="register__input" type="password" placeholder="Confirmez votre mot de passe"/>
      <button className="register__button" type="submit">Valider</button> 
    </form>
  </div>
)
;

export default Register;