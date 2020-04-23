import React from 'react';
import './style.scss';
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Announcement = ({title, location, description, picture, voluntary, id, dateEnd, dateStart, active, user }) => {

return (
  <div className="announcement__container" >
    <div className="announcement__pos1">       
      <img className="announcement__img" style={{backgroundImage: `url(${picture})`}}/>        
      <h2 className="announcement__title">{title}</h2>
      <h3 className="announcement__author">Créée par : {user.firstname} {user.lastname}</h3>
      <h4 className="announcement__date">Date: du {dateStart} au {dateEnd}</h4>
      <h4 className="announcement__place">Lieu: {location}</h4>            
      <p className={`${voluntary ? "announcement__volunteer ":"announcement__paid"}`}>{voluntary ? "Bénévole":"Rémunéré"}</p>
      {active? 
        <p className="announcement__online ">Annonce en cours</p>:
        <p className="endded ">Annonce terminée</p>
      }
      <h3 className="announcement__description">Description:</h3>
      <p className="announcement__text">{ReactHtmlParser(description)}</p>            
    </div>
    <div className="announcement__pos2">
      <Link to={`/edit-announcement/${id}`}>
        <button className="button ">Envoyer un message/Modifier</button>
      </Link>
      <Link to="/home">
        <button className="button ">Retour</button>
      </Link>
    </div>
  </div>
)
};

Announcement.propTypes = {   
  title: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  voluntary: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired,
  dateStart: Proptypes.string.isRequired,
  dateEnd: Proptypes.string.isRequired, 
  active: Proptypes.bool.isRequired,
  fetchData: Proptypes.func,
  user: Proptypes.shape({
    id: Proptypes.number.isRequired,
    firstname: Proptypes.string.isRequired,
    lastname: Proptypes.string.isRequired,
    picture: Proptypes.string.isRequired,
  })      
}


export default Announcement;