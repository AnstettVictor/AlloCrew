  
import React from 'react';
import { Redirect } from "react-router-dom";
import './style.scss';
import PropTypes from 'prop-types';

const Login = ({isLogged, login, handleChange}) => {
  
  
  return(
    
  <div className="login__container">
    <form onSubmit={login} className="login__form">
      <h1>Connexion</h1>
      <input onChange={handleChange} name="username" className="login__input" type="mail" placeholder="Email"/> 
      <input onChange={handleChange} name="password"  className="login__input" type="password" placeholder="Mot de passe"/>
      <button className="login__button" type="submit">Se connecter</button> 
    </form>
  </div>
)
};

Login.proptypes = {
  isLogged: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Login; 