import React, {useState} from 'react';
import './style.scss';
import edit from 'images/svg/edit.svg';


const Profile = () => {
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam excepturi alias voluptatum veritatis sunt voluptates quo, tenetur iure. Commodi ipsum vero, eum rerum cupiditate architecto, dolorum eaque aperiam voluptates animi officiis deleniti eveniet optio distinctio consequatur veniam repudiandae neque cum debitis, illum laudantium magni consectetur? Ipsa modi odio nisi, explicabo harum, ratione doloribus, eos eaque ab officia sunt tempora odit enim mollitia! Eum blanditiis et ");
  const [descriptionEdit, setDescriptionEdit] = useState(false);
  return (
  <div className="profile__container">    
    <div className="profile__pict">
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
        <div className="profile__description">Description<img className="cursor" src={edit} onClick={() => setDescriptionEdit(!descriptionEdit)}/></div>
        {!descriptionEdit? 
          <p className="profile__text">{description}</p>:
          <>
            <textarea onChange={(e) => setDescription(e.target.value)} className="profile__textArea" value={description}/><input value="ok" className="button" type="button" onClick={() => setDescriptionEdit(!descriptionEdit)}/>
          </>
        }
        
      </div>
      <div>
        <h3 className="profile__exp">Expérience</h3>
        <p className="profile__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam excepturi alias voluptatum veritatis sunt voluptates quo, tenetur iure. Commodi ipsum vero, eum rerum cupiditate architecto, dolorum eaque aperiam voluptates animi officiis deleniti eveniet optio distincculp</p>
      </div>
      <div>
        <p className="profile__portfolio">Portfolio:</p>
        <a className="profile__link" href="#">www.jaimeleschips.com</a>
      </div>

      <p className="profile__editButton">Sauvegarder les changements</p>
      <p className="profile__editButton">Annuler</p>
  </div>
)
};

export default Profile;