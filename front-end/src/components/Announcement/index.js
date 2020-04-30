import React from 'react';
import './style.scss';
import Proptypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { date } from 'utils/functions';
import arrow from 'images/svg/arrow.svg';

const Announcement = ({ title, location, description, picture, voluntary, id, dateEnd, dateStart, active, user, sendingMessage, createdAt, userId, redirect }) => {


  if (redirect == 'tchat') {
    return <Redirect to={`/tchat-room/${userId}`} />
  }
  return (
    <div className="announcement__container" >

      <div className="announcement__img" style={{ backgroundImage: `url(${picture})` }} />

      <div className="announcement__pos1">

        <h2 className="announcement__title">{title}</h2>
        <div className="announcement__textInfo">

          <p className="announcement__place">Publiée le {date(createdAt)}</p>
          <p className="announcement__author">par : {user.firstname} {user.lastname}</p>
          <p className={voluntary ? "announcement__volunteer" : "announcement__paid"}>
            Annonce <span>{voluntary ? "bénévole" : "rémunérée"}</span>
          </p>
        </div>

        <div className="announcement__textInfo-2">
          <p className="announcement__date">Du {date(dateStart)} au {date(dateEnd)} à {location}</p>
          <p className="announcement__description">Description:</p>
          <div className="announcement__text">{ReactHtmlParser(description)}</div>
        </div>




        {/* Affichage conditionnel du bouton */}
        {
          userId != user.id && (

            <form onSubmit={(e) => { e.preventDefault(); sendingMessage({ user_id: user.id, announcement_id: id }) }} method="post">
              <button className="button announcement__conditionButton" type="submit" name={user.id}>Envoyer un message</button>
            </form>

          )
        }
        {userId == user.id && (<Link to={`/edit-announcement/${id}`}>
          <button className="button announcement__conditionButton " name={user.id}>Modifier</button>
        </Link>)
        }
        <Link className="back__wrapper" to="/home">
          <div className="announcement__back">Retour</div>
        </Link>
        <br />
        <img className="arrow" src={arrow} />
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
  createdAt: Proptypes.number.isRequired,
  user: Proptypes.shape({
    id: Proptypes.number.isRequired,
    firstname: Proptypes.string.isRequired,
    lastname: Proptypes.string.isRequired,
    picture: Proptypes.string.isRequired,
  })
}


export default Announcement;