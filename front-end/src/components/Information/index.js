import React from 'react';
import './style.scss';
import Avatar from 'images/avatar.png';

const Information = () => (
  <div className="information__container">
    {/* Begining of the card */}
    <div className="information__container-card-wrapper">
      <div className="information__card">
        <div className="information__card-image">
          <img src={Avatar} alt="profile pic" />
        </div>
        <div className="information__details">
          <h2 className="information__name">Prenom NOM
            <br />
            <span className="information__job-title">UI Developer</span>
          </h2>
        </div>
      </div>
    </div>
    {/* The end of the card */}
    {/* Begining of the card */}
    <div className="information__container-card-wrapper">
      <div className="information__card">
        <div className="information__card-image">
          <img src={Avatar} alt="profile pic" />
        </div>
        <div className="information__details">
          <h2 className="information__name">Prenom NOM
            <br />
            <span className="information__job-title">UI Developer</span>
          </h2>
        </div>
      </div>
    </div>
    {/* The end of the card */}
    {/* Begining of the card */}
    <div className="information__container-card-wrapper">
      <div className="information__card">
        <div className="information__card-image">
          <img src={Avatar} alt="profile pic" />
        </div>
        <div className="information__details">
          <h2 className="information__name">Prenom NOM
            <br />
            <span className="information__job-title">UI Developer</span>
          </h2>
        </div>
      </div>
    </div>
    {/* The end of the card */}
    {/* Begining of the card */}
    <div className="information__container-card-wrapper">
      <div className="information__card">
        <div className="information__card-image">
          <img src={Avatar} alt="profile pic" />
        </div>
        <div className="information__details">
          <h2 className="information__name">Prenom NOM
            <br />
            <span className="information__job-title">UI Developer</span>
          </h2>
        </div>
      </div>
    </div>
    {/* The end of the card */}
    {/* Begining of the card */}
    <div className="information__container-card-wrapper">
      <div className="information__card">
        <div className="information__card-image">
          <img src={Avatar} alt="profile pic" />
        </div>
        <div className="information__details">
          <h2 className="information__name">Prenom NOM
            <br />
            <span className="information__job-title">UI Developer</span>
          </h2>
        </div>
      </div>
    </div>
    {/* The end of the card */}
  </div>
);

export default Information;
