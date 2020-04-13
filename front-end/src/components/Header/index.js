import React from 'react';
import './style.scss';

const Header = () => (

  <nav className="header__nav">
    <span className="header__logo">AlloCrew</span> 
    <input className="header__toggle" type="checkbox" id="header__burger"></input>
    <label className="header__toggle-label" htmlFor="header__burger">+</label>
    <div className="header__links">
      <ul className="">
        <li>Accueil</li>
        <li>Rechercher une annonce</li>
        <li>Messagerie </li>
      </ul>
    </div>
    <div className="header__links-2">
      <ul className="">
        <li>Voir mon profil</li>
        <li>Modifier mon profil</li>
        <li>Parametres</li>
      </ul>
    </div>
  </nav>

);

export default Header;