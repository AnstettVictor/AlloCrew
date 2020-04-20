import React, { useRef, useEffect, useState } from "react";
import './style.scss';
import {
  NavLink,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';



const Header = ({connectedUser, isLogged}) => {

  const ref = useRef(null)
  //State du menu burger
  const [menuState, setMenuState] = useState(false);
  //ecouteur d'évenement
  useEffect(
    () => {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click',handleClick) 
        }
    }, [menuState]);
  //fonction pour l'écouteur  
  const handleClick = (e) => {
    ref.current == e.target && !menuState? 
    setMenuState(true):
    setMenuState(false);
  }
 
  return(

  <nav className="header__nav">
    <div  className="transparent"></div>
      <Link to="/home">
        <div className="header__logo">AlloCrew</div> 
      </Link>
    <div className="header__links-desktop">
      <ul className="">
        <Link to="/home" ><li>Accueil</li></Link>
        <Link to="/search" ><li>Rechercher</li></Link>
        <Link to={`/tchat-room/${connectedUser.id}`} ><li>Messagerie</li></Link>
      </ul>
    </div>
    <div  ref={ref} className="header__menuButton">
      +
    </div>
    {
      menuState && (
        <div className="header__menu">
          
          <ul className="header__links-mobile">
            <Link to="/home" ><li>Accueil</li></Link>
            <Link to="/search" ><li>Rechercher</li></Link>
            <Link to={`/tchat-room/${connectedUser.id}`} ><li>Messagerie</li></Link>
          </ul>
          <ul className="header__links">
            <Link to={`/profile/${connectedUser.id}`}><li>Voir mon profil</li></Link>
            <Link to={`/edit-profile/${connectedUser.id}`}><li>Modifier mon profil</li></Link>
            <Link to={`/edit-user/${connectedUser.id}`}><li>Paramètres</li></Link>
            <Link to="/"><li >Déconnexion</li></Link>
          </ul>
        </div>
      )
    }
    
  </nav>

)};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  connectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
}

export default Header;