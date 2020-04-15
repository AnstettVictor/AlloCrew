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
        <h2>Titre de l'annonce</h2>
        <p>Description de l'annonce</p>
      </div>
      <div className="announce__botright">
        <p>Date du tournage</p>
        <p>Date de création de l'annonce</p>
        <p>Lieu</p>
        <p>bénévole</p>
        <input className="button see" type="button" value="Voir l'annonce"/>
        <input className="button seeAndEdit" type="button" value="Voir / Modifier"/>
      </div>
    </div>
  </div>
)
;

export default Announce;