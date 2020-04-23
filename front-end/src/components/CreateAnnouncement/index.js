import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const CreateAnnouncement = ({ handleChange, title, location, description, voluntary, picture, id, onCreateAnnouncementSubmit, handleChangeEditor, handleDateChange, dateStart, dateEnd, handleChecked, handleNotChecked }) => {

  const newStartDate = new Date(dateStart);
  const newEndDate = new Date(dateEnd);

  return (
    <div className="createAnnouncement__container">
      <h2 className="createAnnouncement__title">Création de votre annonce</h2>
      <form id="myform" onSubmit={onCreateAnnouncementSubmit} method="post" >

        <div className="input create__bannerPicture">
          <input
            type="file"
            className="input"
            onChange={handleChange}
            name="picture"
            value={picture}
          />
          <div className="button">Importer</div>
          <p>Image de l'annonce</p>
        </div>

        <div className="create__mainInfos">
          <div className="mainfos__elem">
            <label className="createAnnouncement__desktop--Title">Titre de l'annonce</label>
            <input
              required
              onChange={handleChange}
              value={title}
              name="title"
              className="createAnnouncement__input title input"
              type="text"
              placeholder={title ? title : "Titre de l'annonce"}
            />
          </div>

          <div className="mainfos__elem">
            <label className="createAnnouncement__text createAnnouncement__desktop--Title">Date de début</label>
            <DatePicker
              className="createAnnouncement__input input"
              showPopperArrow={false}
              selected={newStartDate}
              dateFormat="d MMMM, yyyy"
              onChange={handleDateChange}
              dayClassName={() => "date_start"}
              required
            />
          </div>


          <div className="mainfos__elem">
            <label className="createAnnouncement__text createAnnouncement__desktop--Title">Date de fin</label>
            <DatePicker
              className="createAnnouncement__input input"
              showPopperArrow={false}
              selected={newEndDate}
              dateFormat="d MMMM, yyyy"
              onChange={handleDateChange}
              dayClassName={() => "date_end"}
            />
          </div>

          <div className="mainfos__elem">
            <label className="createAnnouncement__desktop--Title">Lieu</label>
            <input
              required
              onChange={handleChange}
              value={location}
              name="location"
              className="createAnnouncement__input input"
              type="text"
              placeholder={location ? location : "Lieu"}
            />
          </div>
        </div>



        <div className="createAnnouncement__botPart">
          <div>
            <input
              className="createAnnouncement__volunteer"
              type="radio"
              id="volonteer"
              name="drone"
              value="volonteer"
              defaultChecked={voluntary}
              onChange={handleChecked}
            />
            <label htmlFor="volonteer" className="createAnnouncement__radio">Bénévole</label>
          </div>

          <div>
            <input
              className="createAnnouncement__paid"
              type="radio"
              id="paid"
              name="drone"
              value="paid"
              defaultChecked={!voluntary}
              onChange={handleNotChecked}
            />
            <label htmlFor="paid" className="createAnnouncement__radio" >Rémunéré</label>
          </div>

          <div className="createAnnouncement__textarea input">
            <label>Description</label>
            <CKEditor
              className="editor"
              editor={ClassicEditor}
              data={description}
              onChange={handleChangeEditor}
              config={{
                removePlugins: ['EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed', 'TableToolbar', 'Table', 'Indent'],
              }}
            />
          </div>
        </div>
        <div className="createAnnouncement__input mobile drop input">
          <input
            type="file"
            className="input"
            name="file"
          />
        </div>

        <div className="createAnnouncement__flex">
          <button type="submit" className="createAnnouncement__button button">Créer</button>
          <Link to="/home">
            <button type="submit" className="createAnnouncement__button button">Retour</button>
          </Link>

        </div>
      </form>
    </div>
  );
}
  ;

CreateAnnouncement.propTypes = {

  handleDateChange: PropTypes.func.isRequired,
  onCreateAnnouncementSubmit: PropTypes.func.isRequired,
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
  handleChecked: PropTypes.func.isRequired,
  handleNotChecked: PropTypes.func.isRequired
}

export default CreateAnnouncement;