import React, {useState, Component} from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';
import { Editor } from 'react-draft-wysiwyg';



const EditAnnouncement = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (    
    <div className="editAnnouncement__container"> 
             
      <h2 className="editAnnouncement__title">Modifier votre annonce</h2>
      <form method="get" type="submit">
        <div className="editAnnouncement__input drop desktop input">
        
        </div> 
        <h2 className="editAnnouncement__desktop--Title">Titre de l'annonce</h2>  
        <input className="editAnnouncement__input title input" type="text" placeholder="Titre de l'annonce" />
        <p className="editAnnouncement__text editAnnouncement__desktop--Title">Date de début</p>
        <DatePicker className="editAnnouncement__input input"
          showPopperArrow={false}
          selected={startDate}
          dateFormat="d MMMM, yyyy"          
          onChange={date => setStartDate(date)}
        />
        <p className="editAnnouncement__text editAnnouncement__desktop--Title">Date de fin</p>
        <DatePicker className="editAnnouncement__input input"
          showPopperArrow={false}
          selected={endDate}
          dateFormat="d MMMM, yyyy"          
          onChange={date => setEndDate(date)}
        />
        <br/>
        <h2 className="editAnnouncement__desktop--Title">Lieu</h2>
        <input className="editAnnouncement__input input" type="text" placeholder="Lieu" />
        <div>
          <input className="editAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer"  />
          <label className="editAnnouncement__volunteer">Bénévole</label>
        </div>
        <div>
          <input className="editAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" />
          <label className="editAnnouncement__paid" >Rémunéré</label>
        </div>    

        <div className="editAnnouncement__textarea input">
        <Editor placeholder="Description de votre projet" />
        </div>
        
        <div className="editAnnouncement__input mobile drop input">
        
        </div>    
      <div className="editAnnouncement__flex">
      <button className="editAnnouncement__button button">Retour</button>
      <button className="editAnnouncement__button button">Enregistrer</button>    
      </div>
    </form>
  </div>);    
}
;

export default EditAnnouncement;