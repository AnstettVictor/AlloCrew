import React, {useState, Component} from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateAnnouncement = ({handleChange, title, location, description, voluntary, picture, id, onEditAnnouncementSubmit}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (    
    <div className="createAnnouncement__container"> 
             
      <h2 className="createAnnouncement__title">Création de votre annonce</h2>

      <form onSubmit={onEditAnnouncementSubmit} method="post" >

        <div className="createAnnouncement__input drop desktop input">
          <input type="file" className="input" name="file" value="" />
        </div> 

        <h2 className="createAnnouncement__desktop--Title">Titre de l'annonce</h2>  
        <input onChange={handleChange} value={title} name="title" className="createAnnouncement__input title input" type="text" placeholder={title?title:"Titre de l'annonce"} />

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
        <input onChange={handleChange} value={location} name="location" className="createAnnouncement__input input" type="text" placeholder={location?location:"Lieu"} />

        <div>
          <input className="createAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer" defaultChecked={voluntary} />
          <label className="createAnnouncement__volunteer">Bénévole</label>
        </div>

        <div>
          <input className="createAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" defaultChecked={voluntary?false:true}/>
          <label className="createAnnouncement__paid" >Rémunéré</label>
        </div>    

        <div className="createAnnouncement__textarea input">
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
        
        <div className="createAnnouncement__input mobile drop input">
          <input type="file" className="input" name="file" value="" />
        </div>    

      <div className="createAnnouncement__flex">
        <button type="submit" className="createAnnouncement__button button">Créer</button>      
      </div>
    </form>
  </div>);    
}
;

CreateAnnouncement.propTypes = {   
  onEditAnnouncementSubmit: PropTypes.func.isRequired,
  handleChangeEditor: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,  
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  voluntary: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  dateStart: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired, 
  active: PropTypes.bool.isRequired,
}

export default CreateAnnouncement;