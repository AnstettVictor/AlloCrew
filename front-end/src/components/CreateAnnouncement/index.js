import React, {useState} from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';
import '../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss';

const CreateAnnouncement = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="createAnnouncement__container">
    <h2 className="createAnnouncement__title">Création de votre annonce</h2> 
    <input className="createAnnouncement__input title input" type="text" placeholder="Titre de l'annonce" />
    <p className="createAnnouncement__text">Date de début</p>

    <DatePicker className="createAnnouncement__input input"
      showPopperArrow={false}
      selected={startDate}
      dateFormat="d MMMM, yyyy"          
      onChange={date => setStartDate(date)}
    />
    <p className="createAnnouncement__text">Date de fin</p>
    <DatePicker className="createAnnouncement__input input"
      showPopperArrow={false}
      selected={endDate}
      dateFormat="d MMMM, yyyy"          
      onChange={date => setEndDate(date)}
    />
    <input className="createAnnouncement__input input" type="text" placeholder="Expérience requise" />
    <input className="createAnnouncement__input input" type="text" placeholder="Lieu" />
    <div>
      <input className="createAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer"  />
      <label className="createAnnouncement__volunteer">Bénévole</label>
    </div>
    <div>
      <input className="createAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" />
      <label className="createAnnouncement__paid" >Paid</label>
    </div>    
    
    <textarea className="createAnnouncement__textarea input" placeholder="Description de votre projet" cols="40" rows="15"/>
    <button className="createAnnouncement__button button">Créer</button>
  </div>);    
}
;

export default CreateAnnouncement;