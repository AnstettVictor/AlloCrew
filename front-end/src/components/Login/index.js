import React from 'react';
import { Redirect } from "react-router-dom";
import './style.scss';

const Login = ({isLogged, checkAuth, userEmail, userPass, handleChange}) => {
  if(isLogged){return <Redirect to='/home'/>}
  return(
    
  <div className="login__container">
    <form onSubmit={checkAuth} className="login__form">
      <h1>Connexion</h1>
      <input onChange={handleChange} name="username" className="login__input" type="mail" placeholder="Email"/> 
      <input onChange={handleChange} name="password"  className="login__input" type="password" placeholder="Mot de passe"/>
      <button className="login__button" type="submit">Se connecter</button> 
    </form>
  </div>
)
};

export default Login; 