import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Profile = ({id, age, location, firstname, lastname, title, description, experience, portfolio, picture, bannerpicture}) => (
  <div className="profile__container">    
      <div className="profile__pict">
        <button className="profile__button button">Modifier</button>
        <div className="profile__pict__cover" style={{backgroundImage: `url(${bannerpicture})`}} />
        <img className="profile__pict__profile" src={picture} />
      </div>
      <div className="profile__info">      
        <h4 className="profile__age">{age} ans </h4>
        <h4 className="profile__place">{location}</h4>        
      </div>    
    <h3 className="profile__name">{firstname} {lastname}</h3>
    <h4 className="profile__age desktop">{age} ans - {location} </h4>
    <h2 className="profile__title">{title}</h2>
    <div className="profile__text">    
    </div>
      <div>
        <h3 className="profile__description">Description</h3>
        <p className="profile__text">{description}</p>
      </div>
      <div>
        <h3 className="profile__exp">Expérience</h3>
        <p className="profile__text">{experience}</p>
      </div>
      <p className="profile__portfolio">Portfolio:</p>
      <a className="profile__link" href="#">{portfolio}</a>
  </div>
)
;
Profile.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,  
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  bannerpicture: PropTypes.string.isRequired,
}
export default Profile;

  // const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam excepturi alias voluptatum veritatis sunt voluptates quo, tenetur iure. Commodi ipsum vero, eum rerum cupiditate architecto, dolorum eaque aperiam voluptates animi officiis deleniti eveniet optio distinctio consequatur veniam repudiandae neque cum debitis, illum laudantium magni consectetur? Ipsa modi odio nisi, explicabo harum, ratione doloribus, eos eaque ab officia sunt tempora odit enim mollitia! Eum blanditiis et ");
  // const [descriptionEdit, setDescriptionEdit] = useState(false);
  // return (
  //   <div className="profile__container">    
  //   <div className="profile__pict">
  //     <button className="profile__button button">Modifier</button>
  //     <div className="profile__pict__cover" style={{backgroundImage: `url(${bannerpicture})`}} />
  //     <img className="profile__pict__profile" src={picture} />
  //   </div>
  //   <div className="profile__info">      
  //     <h4 className="profile__age">{age} ans </h4>
  //     <h4 className="profile__place">{location}</h4>        
  //   </div>    
  // <h3 className="profile__name">{firstname} {lastname}</h3>
  // <h4 className="profile__age desktop">{age} ans - {location} </h4>
  // <h2 className="profile__title">{title}</h2>
  // <div className="profile__text">    
  // </div>
  //   <div>
  //         {/* <>
  //           <textarea onChange={(e) => setDescription(e.target.value)} className="profile__textArea" value={description}/><input value="ok" className="button" type="button" onClick={() => setDescriptionEdit(!descriptionEdit)}/>
  //         </> */}
        
  //       <h3 className="profile__description">Description</h3>
  //       <p className="profile__text">{description}</p>
  //     </div>
  //     <div>
  //       <h3 className="profile__exp">Expérience</h3>
  //       <p className="profile__text">{experience}</p>
  //     </div>
  //     <p className="profile__portfolio">Portfolio:</p>
  //     <a className="profile__link" href="#">{portfolio}</a>
  // </div>