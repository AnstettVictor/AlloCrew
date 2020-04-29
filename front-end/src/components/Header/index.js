import React, { useRef, useEffect, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const Header = ({userId, logout, isLogged}) => {

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
 
  return (

    <nav className="header__nav">

      <div  className="transparent"/>
        <Link to="/home">
          <img className="header__logo_img" src="../../src/assets/images/favicon.png"  />     
          <div className="header__logo">AlloCrew</div> 
        </Link>

        {
        isLogged && (
          <>
            <div className="header__links-desktop">
              <ul className="">
                <Link to="/home" ><li>Accueil</li></Link>
                <Link to="/search" ><li>Rechercher</li></Link>
                <Link to={`/tchat-room/${userId}`} ><li>Messagerie</li></Link>
              </ul>
            </div>

            <div  ref={ref} className="header__menuButton">+</div>
            
          </>
          )
        }

        {/* Menu burger */}

        {
        isLogged && menuState && (

          <div className="header__menu">

            <ul className="header__links-mobile">
              <Link to="/home" ><li>Accueil</li></Link>
              <Link to="/search" ><li>Rechercher</li></Link>
              <Link to={`/tchat-room/${userId}`} ><li>Messagerie</li></Link>
            </ul>

            <ul className="header__links">
              <Link to={`/profile`}><li>Voir mon profil</li></Link>
              <Link to={`/edit-profile`}><li>Modifier mon profil</li></Link>
              <Link to={`/edit-user`}><li>Paramètres</li></Link>
              <Link to="/"><li onClick={logout} >Déconnexion</li></Link>
            </ul>

        </div> 
          )
        }

    </nav>
  )
}
;

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  logout: PropTypes.func.isRequired
}

export default Header;