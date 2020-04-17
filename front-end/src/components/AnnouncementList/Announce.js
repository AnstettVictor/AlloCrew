import React from 'react';
import './style.scss';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

const Announce = ({ title, location, description, picture, voluntary, id, dateEnd, dateStart, active, user, createdAt }) =>  (
  <div className="announce">
    <div className="announce__banner" >
      <div className="announce__avatar"/>
    </div>

    <p className="announce__user">{user.firstname} {user.lastname} - user.title  <span className="announce__creation">créée le {createdAt}</span></p>
    <div className="announce__bot">
      <div className="announce__botleft">
        <h2>{title}</h2>
        <p className="announce__description">{description}</p>
      </div>
      <div className="announce__botright">
        <div className="announce__details">
          <p>du {dateStart} au {dateEnd}</p>
          <p>à {location}</p>
          <p> {voluntary? "Bénévole": "Rémunérée"}</p>
        </div>
        <input className="announce__button button see" type="button" value="Voir l'annonce"/>
        <Link to={`/announcement/${id}`}><input className="announce__button button seeAndEdit" type="button" value="Voir / Modifier"/></Link>
      </div>
    </div>
  </div>
)
;

Announce.propTypes = {   
  title: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  voluntary: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired,
  dateStart: Proptypes.string.isRequired,
  dateEnd: Proptypes.string.isRequired, 
  active: Proptypes.bool.isRequired,
  createdAt: Proptypes.string.isRequired,
  user: Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      picture: Proptypes.string.isRequired,
  })      
}
export default Announce;