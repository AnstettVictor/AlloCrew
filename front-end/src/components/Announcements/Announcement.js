import React from 'react';
import './style.scss';

const Announcement = () => (
    <div className="announcement__container">        
        <div className="announcement__img"></div>
       
        <h2 className="announcement__title">Recherche opérateur de prise de vue</h2>
        <h3 className="announcement__author">Créée par : John Doe</h3>
        <h4 className="announcement__date">Date: du 22/05/2019 au 26/05/2019</h4>
        <h4 className="announcement__place">Lieu: Paris</h4>
        <p className="announcement__exp">Expérience requise: 2 ans</p>
        <p className="announcement__paid volunteer">Rémunérée</p>
        <p className="announcement__online endded">Annonce en cours</p>
        <h3 className="announcement__description">Description:</h3>
        <p className="announcement__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aperiam dolor, vero doloribus sequi molestias nisi officiis nihil excepturi voluptatum exercitationem placeat reprehenderit? Assumenda velit dolorum, officiis facilis autem asperiores! Eius enim itaque totam consequatur sed officia vitae nemo in blanditiis dicta adipisci quos ipsa beatae vero, vel quod! At ab aliquid, tenetur vel ex neque! Sit nemo ducimus dolore ab impedit odit. Sint, labore tenetur architecto aliquam necessitatibus ea. Asperiores sequi qui laudantium facilis non quo, rem tenetur dolores nobis aspernatur quasi sapiente numquam ab minus nostrum excepturi, saepe nemo voluptas doloremque quibusdam odit, libero voluptatum incidunt architecto. Porro?</p>        
        <button className="button">Envoyer un message/Modifier</button>
        
    </div>
)
;

export default Announcement;