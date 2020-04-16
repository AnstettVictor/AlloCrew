import React, {useState, Component} from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';
import { Editor } from 'react-draft-wysiwyg';
import Accept from './DropZone';
import Proptypes from 'prop-types';

const EditAnnouncement = ({title, location, description, voluntary, picture, id}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (    
    <div className="editAnnouncement__container"> 
             
      <h2 className="editAnnouncement__title">Modifier votre annonce</h2>
      <form method="get" type="submit">
        <div className="editAnnouncement__input drop desktop input" style={{backgroundImage: `url(${picture})`}}>
        <Accept />
        </div> 
        <h2 className="editAnnouncement__desktop--Title">Titre de l'annonce</h2>  
        <input className="editAnnouncement__input title input" type="text" placeholder={title?title:"Titre de l'annonce"} />
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
        <input className="editAnnouncement__input input" type="text" placeholder={location?location:"Titre de l'annonce"} />
        
        <div>        
        <input className="editAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer" defaultChecked={voluntary} />
          <label className="editAnnouncement__volunteer">Bénévole</label>
        </div>
        <div>
          <input className="editAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" />
          <label className="editAnnouncement__paid" defaultChecked={voluntary?false:true} >Rémunéré</label>
        </div> 
        <div className="editAnnouncement__textarea input">
        <Editor>{description} </Editor>
        </div>        
        <div className="editAnnouncement__input mobile drop input">
        <Accept />
        </div>    
      <div className="editAnnouncement__flex">
      <button className="editAnnouncement__button button">Retour</button>
      <button className="editAnnouncement__button button">Enregistrer</button>    
      </div>
    </form>
  </div>);    
}
;

EditAnnouncement.propTypes = {   
  title: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  voluntary: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired,
  dateStart: Proptypes.string.isRequired,
  dateEnd: Proptypes.string.isRequired, 
  active: Proptypes.bool.isRequired,  
  user: Proptypes.shape({
    id: Proptypes.number.isRequired,
    firstname: Proptypes.string.isRequired,
    lastname: Proptypes.string.isRequired,
    picture: Proptypes.string.isRequired,
  }) 
}

export default EditAnnouncement;