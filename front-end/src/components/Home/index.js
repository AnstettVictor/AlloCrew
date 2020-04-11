import React from 'react';
import './style.scss';
import Profile from './HomeProfile';

const Home = () => (
  <div className="home__container">
    <div className="home__left">
      <div className="home__profile">
        <Profile />
      </div>
      <div className="home__news"/>
    </div>
    <div className="home__announcementlist">
      <ul className="home__navlink">
        <li>Dernieres annonces</li>
        <li>Mes favoris</li>
        <li>Rehercher une annonce</li>
      </ul>

      <div className="home__announcement">
        <div className="home__announcement__img">
          <img src="" alt="announcement"/>
        </div>
        <div className="home__announcement__avatar">
          <img src="" alt="avatar"/>
        </div>
        <p>Nom du posteur</p>
        <p>Role du posteur</p>
        <p>Titre de l'annonce</p>
        <p>Description de l'annonce</p>
        <p>Date de création de l'annonce</p>
        <input type="button" value="Voir l'annonce"/>
      </div>
      <div className="home__announcement">
        <div className="home__announcement__img">
          <img src="" alt="announcement"/>
        </div>
        <div className="home__announcement__avatar">
          <img src="" alt="avatar"/>
        </div>
        <p>Nom du posteur</p>
        <p>Role du posteur</p>
        <p>Titre de l'annonce</p>
        <p>Description de l'annonce</p>
        <p>Date de création de l'annonce</p>
        <input type="button" value="Voir l'annonce"/>
      </div>
      <div className="home__announcement">
        <div className="home__announcement__img">
          <img src="" alt="announcement"/>
        </div>
        <div className="home__announcement__avatar">
          <img src="" alt="avatar"/>
        </div>
        <p>Nom du posteur</p>
        <p>Role du posteur</p>
        <p>Titre de l'annonce</p>
        <p>Description de l'annonce</p>
        <p>Date de création de l'annonce</p>
        <input type="button" value="Voir l'annonce"/>
      </div>

    </div>
  </div>
)
;

export default Home;