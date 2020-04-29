import React from 'react';
import './style.scss';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';
import {date} from 'utils/functions';
import ReactHtmlParser from 'react-html-parser';

const Announce = ( { title, location, description, picture, voluntary, id, dateEnd, dateStart, active, user, createdAt, userId }) =>  (
  <div className="announce">
    <div className="announce__banner" style={{backgroundImage: `url(${picture})`}}  > 
  
    <Link to={`/profile/${user.id}`}>
      <div className="announce__avatar" style={{backgroundImage: `url(${user.picture})`}} />
    </Link>
    </div>

    <Link to={`/profile/${user.id}`}>
      <p className="announce__user">
        {user.firstname} {user.lastname} - {user.title} 
        <span className="announce__creation">créée le {date(createdAt)}</span>
      </p>
    </Link> 

    <div className="announce__bot">
      <div className="announce__botleft">
        <p className="announce__title">{title}</p>
        {console.log({id})}
        
      
     
        <div className="announce__description">
          {ReactHtmlParser(description.length > 100 ?`${description.substring(0, 99)} ...`:description)}
        </div>
      </div>
      <div className="announce__botright">
        <div className="announce__details">
          <p>du {date(dateStart)} au {date(dateEnd)}</p>
          <p>à {location}</p>
          <p> {voluntary? "Bénévole": "Rémunérée"}</p>
        </div>
        <input className="announce__button button see" type="button" value="Voir l'annonce"/>

        <Link to={`/announcement/${id}`}>
          <input className="announce__button button seeAndEdit" type="button" value="Voir l'Annonce"/>
        </Link>
      </div>
    
    </div>
  </div>
)
;

// Announce.propTypes = {   
//   title: Proptypes.string.isRequired,
//   location: Proptypes.string.isRequired,
//   description: Proptypes.string.isRequired,
//   picture: Proptypes.string.isRequired,
//   voluntary: Proptypes.bool.isRequired,
//   id: Proptypes.number.isRequired,
//   dateStart: Proptypes.string.isRequired,
//   dateEnd: Proptypes.string.isRequired, 
//   active: Proptypes.bool.isRequired,
//   createdAt: Proptypes.string.isRequired,
//   user: Proptypes.shape({
//       id: Proptypes.number.isRequired,
//       firstname: Proptypes.string.isRequired,
//       lastname: Proptypes.string.isRequired,
//       picture: Proptypes.string.isRequired,
//   })      
// }
export default Announce;