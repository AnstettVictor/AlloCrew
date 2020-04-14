import React from 'react';
import './style.scss';

const Profile = () => (
  <div className="profile__container">    
      <div className="profile__pict">
        <button className="profile__button button">Modifier</button>
        <img className="profile__pict__cover" />
        <img className="profile__pict__profile" src="https://cannabisnow.com/wp-content/uploads/2018/09/Elon-Musk-Joe-Rogan.jpg" />
      </div>
      <div className="profile__info">
      
        <h4 className="profile__age">45 ans </h4>
        <h4 className="profile__place">Paris</h4>        
      </div>    
    <h3 className="profile__name">Ludovic Argenty</h3>
    <h4 className="profile__age desktop">45 ans - Paris </h4>
        
    <h2 className="profile__title">Opérateur de Prise de vue</h2>
    <div className="profile__text">    
    </div>
    
      <div>
        <h3 className="profile__description">Description</h3>
        <p className="profile__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam excepturi alias voluptatum veritatis sunt voluptates quo, tenetur iure. Commodi ipsum vero, eum rerum cupiditate architecto, dolorum eaque aperiam voluptates animi officiis deleniti eveniet optio distinctio consequatur veniam repudiandae neque cum debitis, illum laudantium magni consectetur? Ipsa modi odio nisi, explicabo harum, ratione doloribus, eos eaque ab officia sunt tempora odit enim mollitia! Eum blanditiis et </p>
      </div>
      <div>
        <h3 className="profile__exp">Expérience</h3>
        <p className="profile__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam excepturi alias voluptatum veritatis sunt voluptates quo, tenetur iure. Commodi ipsum vero, eum rerum cupiditate architecto, dolorum eaque aperiam voluptates animi officiis deleniti eveniet optio distincculp</p>
      </div>
      <p className="profile__portfolio">Portfolio:</p>
      <a className="profile__link" href="#">www.jaimeleschips.com</a>
  </div>
)
;

export default Profile;