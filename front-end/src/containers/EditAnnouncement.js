import EditAnnouncement from '../components/EditAnnouncement';
import {inputAnnouncementChange, deleteAnnouncement, checkData, patchEditAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data, login}, {match}) => {

  const announcement = data.announcements.find(one => one.id == match.params.id)
  return({
    title: announcement.title,
    location: announcement.location,
    description: announcement.description,
    picture: announcement.picture,
    voluntary: announcement.voluntary,
    id: announcement.id,
    dateStart: announcement.dateStart,
    dateEnd: announcement.dateEnd,
    active: announcement.active,
    user: announcement.user,
    createdAt: announcement.createdAt,
    userId: login.userId,
  })
};

const mapDispatchToProps = (dispatch, {match}) =>{
  
  
  return ({
  
 

  handleChange: (e) => dispatch(inputAnnouncementChange({[e.target.name]: e.target.value, id: match.params.id})),

  
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
};

const announcements = connect(mapStateToProps, mapDispatchToProps)(EditAnnouncement);

export default announcements;