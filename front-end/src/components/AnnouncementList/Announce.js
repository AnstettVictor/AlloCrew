import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';


const Announce = () => (
  <div className="announce">
    <div className="announce__banner" >
      <div className="announce__avatar"/>
    </div>

    <p className="announce__user">Prénom NOM, Role - <span className="announce__creation">créé le 02/54/1456</span></p>
    <div className="announce__bot">
      <div className="announce__botleft">
        <h2>Cherche quelque chose</h2>
        <p className="announce__description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre</p>
      </div>
      <div className="announce__botright">
        <div className="announce__details">
          <p>du 01/02/1235 au 02/03/2314</p>
          <p>à Paris</p>
          <p>Rémunérée</p>
        </div>
        <input className="announce__button button see" type="button" value="Voir l'annonce"/>
        <Link to="/announcement/1" ><input className="announce__button button seeAndEdit" type="button" value="Voir / Modifier"/></Link>
      </div>
    </div>
  </div>
)
;

export default Announce;