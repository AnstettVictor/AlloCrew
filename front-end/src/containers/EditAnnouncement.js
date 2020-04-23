import EditAnnouncement from '../components/EditAnnouncement';
import {inputAnnouncementChange, patchEditAnnouncement, inputEditAnnouncementChange} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data }) => { 
  
  return({
    title: data.announcements[0].title,
    location: data.announcements[0].location,
    description: data.announcements[0].description,
    picture: data.announcements[0].picture,
    voluntary: data.announcements[0].voluntary,    
    dateStart: data.announcements[0].dateStart,
    dateEnd: data.announcements[0].dateEnd,
    active: data.announcements[0].active,
         
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputAnnouncementChange({[e.target.name]: e.target.value})),

  
  handleChangeEditor: (e, editor) => dispatch(inputAnnouncementChange(
    {
      ["description"]: editor.getData()
    }
  )),

  handleDateChange: (date, evt) => {console.log(evt.target.classList); dispatch(inputAnnouncementChange({[evt.target.classList[1]]: date}))},

  handleChecked: (e) => {console.log(e.target.checked); dispatch(inputAnnouncementChange({'voluntary': e.target.checked}))},
  handleNotChecked: (e) => {console.log(e.target.checked); dispatch(inputAnnouncementChange({'voluntary': !e.target.checked}))},

  onEditAnnouncementSubmit: (e) => {e.preventDefault(); dispatch(patchEditAnnouncement(match.params.id))},

  
})
;

const announcements = connect(mapStateToProps, mapDispatchToProps)(EditAnnouncement);

export default announcements;