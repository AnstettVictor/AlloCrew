import EditAnnouncement from '../components/EditAnnouncement';
import {fetchAnnouncement, inputAnnouncementChange, patchEditAnnouncement, passId } from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data }) => {
  const announcement = data.announcements[0];
  console.log(announcement)
  return({
    title: announcement.title,
    location: announcement.location,
    description: announcement.description,
    picture: announcement.picture,
    voluntary: announcement.voluntary,    
    dateStart: announcement.dateStart,
    dateEnd: announcement.dateEnd,
    active: announcement.active,
    user: announcement.user,
    id: announcement.id,    
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputAnnouncementChange({[e.target.name]: e.target.value})),
  fetchData: dispatch(fetchAnnouncement(match.params.id)),
  handleChangeEditor: (e, editor) => dispatch(inputAnnouncementChange(
    {
      ["description"]: editor.getData()
    }
  )),

  handleDateChange: (date, evt) => dispatch(inputAnnouncementChange({[evt.target.classList[1]]: date})),

  handleChecked: (e) => {console.log(e.target.checked); dispatch(inputAnnouncementChange({'voluntary': e.target.checked}))},
  handleNotChecked: (e) => {console.log(e.target.checked); dispatch(inputAnnouncementChange({'voluntary': !e.target.checked}))},

  onEditAnnouncementSubmit: (e) => {e.preventDefault(); dispatch(patchEditAnnouncement(e.target.id))},

  
})
;

const announcements = connect(mapStateToProps, mapDispatchToProps)(EditAnnouncement);

export default announcements;