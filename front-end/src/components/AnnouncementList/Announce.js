import React from 'react';
import './style.scss';
import Proptypes from 'prop-types';

const Announce = ({ title, location, description, picture, voluntary, id, dateEnd, dateStart, active, user,createdAt }) => (
  <div className="announce">
    <div className="announce__banner" style={{backgroundImage: `url(${picture})`}} >
      <div className="announce__avatar" style={{backgroundImage: `url(${user.picture})`}}/>
    </div>
    <p className="announce__user">{user.firstname} {user.lastname}</p>
    <div className="announce__bot">
      <div className="announce__botleft">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="announce__botright">
        <p>{dateStart} au {dateEnd}</p>
        <p>Créée le : {createdAt}</p>
        <p>{location}</p>
        <p>{voluntary}</p>
        <input className="button see" type="button" value="Voir l'annonce"/>
        <input className="button seeAndEdit" type="button" value="Voir / Modifier"/>
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