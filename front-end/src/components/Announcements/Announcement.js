import React from 'react';
import './style.scss';

const Announcement = () => (
    <div className="announcement__container">
        <div className="announcement__pos1">       
            <div className="announcement__img"/>        
            <h2 className="announcement__title">Recherche opérateur de prise de vue</h2>
            <h3 className="announcement__author">Créée par : John Doe</h3>
            <h4 className="announcement__date">Date: du 22/05/2019 au 26/05/2019</h4>
            <h4 className="announcement__place">Lieu: Paris</h4>
            <p className="announcement__exp">Expérience requise: 2 ans</p>
            <p className="announcement__paid volunteer">Rémunérée</p>
            <p className="announcement__online endded">Annonce en cours</p>
            <h3 className="announcement__description">Description:</h3>
            <p className="announcement__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur 
            </p>
            </div>
        <div className="announcement__pos2">        
            <button className="button announcement__button">Envoyer un message/Modifier</button>
        </div> 
        
    </div>
)
;

export default Announcement;