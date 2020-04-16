import Announcement from '../components/Announcement';
import {changeName, fetchAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ announcement }) => {
  console.log(announcement.user)
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
  fetchData: dispatch(fetchAnnouncement(match.params.id))
})
;

const announcement = connect(mapStateToProps, mapDispatchToProps)(Announcement);

export default announcement;