import React from 'react';
import './style.scss';

const Login = () => (
  <div className="login__container">
    <form className="login__form">
      <h1>Connexion</h1>
      <input className="login__input" type="mail" placeholder="Email"/> 
      <input className="login__input" type="password" placeholder="Mot de passe"/>
      <button className="login__button" type="submit">Se connecter</button> 
    </form>
  </div>
)
;

export default Login; 