import React from 'react';
import './style.scss';

const Header = () => (
  <nav className="navbar">
        <a href="#" className="logo">AlloCrew</a>
        <ul className="main-nav">
            <li>
                <a href="#" className="nav-links">Accueil</a>
            </li>
            <li>
                <a href="#" className="nav-links">Rechercher</a>
            </li>
            <li>
                <a href="#" className="nav-links">Messagerie</a>
            </li>
        </ul>
        <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars" onClick='TODO'>=</i>
        </span>
    </nav>
);

export default Header;