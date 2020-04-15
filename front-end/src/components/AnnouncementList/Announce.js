import React from 'react';
import './style.scss';


const Announce = () => (
  <div className="announce">
    <div className="announce__banner" >
      <div className="announce__avatar"/>
    </div>
    <p className="announce__user">Prénom NOM - Role</p>
    <div className="announce__bot">
      <div className="announce__botleft">
        <h2>Cherche quelque chose</h2>
        <p className="announce__description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre</p>
      </div>
      <div className="announce__botright">
        <p>du 01/02/1235 au 02/03/2314</p>
        <p>crée le 02/54/23</p>
        <p>Paris</p>
        <p>bénévole</p>
        <input className="announce__button button see" type="button" value="Voir l'annonce"/>
        <input className="announce__button button seeAndEdit" type="button" value="Voir / Modifier"/>
      </div>
    </div>
  </div>
)
;

export default Announce;