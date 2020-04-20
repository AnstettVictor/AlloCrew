import CreateAnnouncement from '../components/CreateAnnouncement';
import {fetchAnnouncement, inputAnnouncementChange, postAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data}) => {
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
    user: announcement.user
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputAnnouncementChange({[e.target.name]: e.target.value})), 
  fetchData: dispatch(fetchAnnouncement(match.params.id)),
  postAnnouncement: (e) => {e.preventDefault(); dispatch(postAnnouncement())}
})
;

const announcement = connect(mapStateToProps, mapDispatchToProps)(CreateAnnouncement);

export default announcement;