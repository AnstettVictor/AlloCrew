import Announcement from '../components/Announcement';
import {changeName, fetchAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ announcements }) => {
  console.log(announcement.user)
  return({
    title: announcements.title,
    location: announcements.location,
    description: announcements.description,
    picture: announcements.picture,
    voluntary: announcements.voluntary,
    id: announcements.id,
    dateStart: announcements.dateStart,
    dateEnd: announcements.dateEnd,
    active: announcements.active,
    user: announcements.user
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  fetchData: dispatch(fetchAnnouncement(match.params.id))
})
;

const announcements = connect(mapStateToProps, mapDispatchToProps)(Announcement);

export default announcements;