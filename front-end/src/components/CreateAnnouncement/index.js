import React, {useState} from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';

const CreateAnnouncement = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (    
    <div className="createAnnouncement__container"> 
             
      <h2 className="createAnnouncement__title">Création de votre annonce</h2>
      <div className="createAnnouncement__input drop desktop input">
        {/* <Accept  /> */}
      </div> 
      <h2 className="createAnnouncement__desktop--Title">Titre de l'annonce</h2>  
      <input className="createAnnouncement__input title input" type="text" placeholder="Titre de l'annonce" />
      <p className="createAnnouncement__text createAnnouncement__desktop--Title">Date de début</p>
      <DatePicker className="createAnnouncement__input input"
        showPopperArrow={false}
        selected={startDate}
        dateFormat="d MMMM, yyyy"          
        onChange={date => setStartDate(date)}
      />
      <p className="createAnnouncement__text createAnnouncement__desktop--Title">Date de fin</p>
      <DatePicker className="createAnnouncement__input input"
        showPopperArrow={false}
        selected={endDate}
        dateFormat="d MMMM, yyyy"          
        onChange={date => setEndDate(date)}
      />
      <br/>
      <h2 className="createAnnouncement__desktop--Title">Lieu</h2>
      <input className="createAnnouncement__input input" type="text" placeholder="Lieu" />
      <div>
        <input className="createAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer"  />
        <label className="createAnnouncement__volunteer">Bénévole</label>
      </div>
      <div>
        <input className="createAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" />
        <label className="createAnnouncement__paid" >Rémunéré</label>
      </div>    
      
      <textarea className="createAnnouncement__textarea input" placeholder="Description de votre projet" cols="40" rows="15"/>
      
      <textarea className="createAnnouncement__textarea--deskTop input" placeholder="Description de votre projet" cols="120" rows="15"/>
      
      <div className="createAnnouncement__input mobile drop input">
        {/* <Accept  /> */}
      </div>    
    <div className="createAnnouncement__flex">
    <button className="createAnnouncement__button button">Créer</button>
    
    </div>
  </div>);    
}
;

export default CreateAnnouncement;