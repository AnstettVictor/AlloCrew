import EditAnnouncement from '../components/EditAnnouncement';
import {fetchAnnouncement, inputAnnouncementChange, patchEditAnnouncement, passId } from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data }) => {
  const announcement = data.announcements[0];
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
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputAnnouncementChange({[e.target.name]: e.target.value})),

  handleChangeEditor: (e, editor) => dispatch(inputAnnouncementChange(
    {
      ["description"]: editor.getData()
    }
  )),

  onEditAnnouncementSubmit: (e) => {e.preventDefault(); dispatch(passId(patchEditAnnouncement))},

  fetchData: dispatch(fetchAnnouncement(match.params.id))
})
;

const announcements = connect(mapStateToProps, mapDispatchToProps)(EditAnnouncement);

export default announcements;