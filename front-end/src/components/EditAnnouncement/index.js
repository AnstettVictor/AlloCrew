import React, {useState, Component} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import DatePicker from 'react-datepicker';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const EditAnnouncement = ({handleChange, deleteD, handleDateChange, handleChecked, handleNotChecked, title, dateStart, dateEnd, location, description, voluntary, picture, onEditAnnouncementSubmit, handleChangeEditor, id}) => {

  const date1 =  new Date(dateStart)
  const date2 =  new Date(dateEnd);
  
  return (    
    <div className="editAnnouncement__container"> 
      <form onSubmit={onEditAnnouncementSubmit}  method="patch" >     
        <h2 className="editAnnouncement__title">Modifier votre annonce</h2>
      

        <div className="editAnnouncement__input drop desktop input" style={{backgroundImage: `url(${picture})`}}>
        <input 
            type="text" 
            className="input" 
            onChange={handleChange}
            name="picture"  
            value={picture} 
          />
        </div> 
        
        <h2 className="editAnnouncement__desktop--Title">Titre de l'annonce</h2>  
        <input 
          required
          onChange={handleChange} 
          value={title} 
          name="title" 
          className="editAnnouncement__input title input" 
          type="text" 
          placeholder={ title? title: "Titre de l'annonce" } 
        />
        <p className="editAnnouncement__text editAnnouncement__desktop--Title">Date de début</p>

        <DatePicker 
          className="editAnnouncement__input input"
          showPopperArrow={false}
          selected= {date1}
          dateFormat="d MMMM, yyyy"          
          onChange={handleDateChange}
          dayClassName={() => "dateStart"}
          required
        />
<button onClick={deleteD} name={id} className="editAnnouncement__button discussion__delete button" type="submit" method="delete">Supprimer</button>  
        <p className="editAnnouncement__text editAnnouncement__desktop--Title">Date de fin</p>
        
        <DatePicker 
          className="editAnnouncement__input input"          
          showPopperArrow={false}
          selected= {date2}
          dateFormat="d MMMM, yyyy"          
          onChange={handleDateChange}          
          dayClassName={() => "dateEnd"}
        />
       
        <br/>
        <h2 className="editAnnouncement__desktop--Title">Lieu</h2>
        <input 
          required
          onChange={handleChange} 
          value={location} 
          name="location" 
          className="editAnnouncement__input input" 
          type="text" 
          placeholder={location?location:"Lieu"} 
        />
        
        <div>
          <input className="createAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer" defaultChecked={voluntary} onChange={handleChecked}/>
          <label className="createAnnouncement__volunteer">Bénévole</label>
        </div>
        <div>
          <input className="createAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" defaultChecked={!voluntary} onChange={handleNotChecked} />
          <label className="createAnnouncement__paid" >Rémunéré</label>
        </div>

        <div className="editAnnouncement__textarea input">
          <CKEditor
            className="editor"
            editor={ClassicEditor}
            data={description}
            onChange={handleChangeEditor}
            config={{
              removePlugins: [ 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed', 'TableToolbar', 'Table', 'Indent' ],
            }}

          />
        </div>  

        <div className="editAnnouncement__input mobile drop input">
          <input type="file" className="input" name="file" value="" />
        </div> 

        <div className="editAnnouncement__flex">        
          <button type="submit" className="editAnnouncement__button button">Enregistrer</button>           
          
          <Link to={`/announcement/${id}`}> 
            <button className="editAnnouncement__button button">Retour</button>
          </Link>  
        </div>
      </form>
     
      

  </div>);    
}
;

EditAnnouncement.propTypes = {
  onEditAnnouncementSubmit: PropTypes.func.isRequired,
  handleChangeEditor: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  voluntary: PropTypes.bool.isRequired,  
  dateStart: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired, 
  active: PropTypes.bool.isRequired,
}

export default EditAnnouncement;