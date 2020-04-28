import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Register = ({onChange, onSubmit, username, _username, password, _password, notification, registerSuccess}) => {
  // Redirection

return(  
  <div className="register__container">
    <form className="register__form" onSubmit={onSubmit}>
      <h1>Inscription</h1>
      {/* flash message */}
      {notification && <div style={{color: '#f00'}}>{notification}</div>}
      <br/>

      <label>Entrez votre adresse email</label>
      <input 
        required
        className="register__input" 
        value={username} 
        onChange={onChange} 
        name="username" 
        type="mail" 
        placeholder="Entrez votre adresse email"/> 
      <label>Confirmez adresse email</label>
      <input 
        className="register__input" 
        value={_username}   
        onChange={onChange}
        name="_username"
        type="mail" 
        placeholder="Confirmez adresse email"/> 
      <label>Entrez votre mot de passe</label> 
      <input 
        className="register__input" 
        value={password}   
        onChange={onChange}
        name="password"
        type="password" 
        placeholder="Entrez votre mot de passe"/>
      <label>Confirmez votre mot de passe</label>
      <input 
        className="register__input" 
        value={_password}   
        onChange={onChange}
        name="_password"
        type="password" 
        placeholder="Confirmez votre mot de passe"/>

      <button className="register__button" type="submit">Valider</button> 
    </form>
  </div>
)}
;

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  _username: PropTypes.string.isRequired,
  _password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,  
}

export default Register;