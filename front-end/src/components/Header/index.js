import React, { useRef, useEffect, useState } from "react";
import './style.scss';
import {
  NavLink,
  Link
} from "react-router-dom";

const Header = () => {

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
        <NavLink to="/profile"><li>Voir mon profil</li></NavLink>
        <NavLink to="/edit-profile"><li>Modifier mon profil</li></NavLink>
        <NavLink to="/edit-user"><li>Parametres</li></NavLink>
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
            <Link to="/tchat-room" ><li>Messagerie</li></Link>
          </ul>
          <ul className="header__links">
            <Link to="/profile"><li>Voir mon profil</li></Link>
            <Link to="/edit-profile"><li>Modifier mon profil</li></Link>
            <Link to="/edit-user"><li>Parametres</li></Link>
            <Link to="/edit-user"><li>Deconnexion</li></Link>
          </ul>
        </div>
      )
    }
    
  </nav>

)};

export default Header;