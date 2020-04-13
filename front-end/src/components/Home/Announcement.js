import React from 'react';
import './style.scss';
import img from 'images/favicon.png';

const Announcement = () => (
  <div className="home__announcement">
    <div className="home__announcement__banner" >
        <div className="home__announcement__avatar"/>
    </div>
    <p className="home__announcement__user">Prénom NOM - Role</p>
    <div className="home__announcement__bot">
      <div className="home__announcement__botleft">
        <h2>Titre de l'annonce</h2>
        <p>Description de l'annonce</p>
      </div>
      <div className="home__announcement__botright">
        <p>Date du tournage</p>
        <p>Date de création de l'annonce</p>
        <p>Lieu</p>
        <p>bénévole</p>
        <input type="button" value="Voir l'annonce"/>
      </div>
    </div>
  </div>
)
;

export default Announcement;