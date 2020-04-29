import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {date} from 'utils/functions';
import ReactHtmlParser from 'react-html-parser';

const Announce = ( { title, location, description, picture, voluntary, id, dateEnd, dateStart, user, createdAt }) =>  (

  <div className="announce">

    <div className="announce__banner" style={{backgroundImage: `url(${picture})`}}>
      <Link to={`/profile/${user.id}`}>
        <div className="announce__avatar" style={{backgroundImage: `url(${user.picture})`}} />
      </Link>
    </div>

    <Link to={`/profile/${user.id}`}>
      <p className="announce__user">
        {user.firstname} {user.lastname} - {user.title} 
        <span className="announce__creation">
          créée le {date(createdAt)}
        </span>
      </p>
    </Link> 

    <div className="announce__bot">

      <div className="announce__botleft">
        <p className="announce__title">{title}</p>

        <div className="announce__description">
          {
            ReactHtmlParser(description.length > 100 ?`${description.substring(0, 99)} ...`:description)
          }
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

Announce.propTypes = {   
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  voluntary: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  dateStart: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,  
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
  })      
}

export default Announce;