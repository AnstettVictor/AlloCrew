import Announcement from '../components/Announcement';
import {fetchAnnouncement, passId, loginOk, fetchProfile} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data, login}, test) => {
  const announcement = data.announcements.find(one => one.id == test.match.params.id)
  return({
    title: announcement.title,
    location: announcement.location,
    description: announcement.description,
    picture: announcement.picture,
    voluntary: announcement.voluntary,
    id: announcement.id,
    dateStart: announcement.date_start,
    dateEnd: announcement.date_end,
    active: announcement.active,
    user: announcement.user,
    userId: login.userId,
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  // fetchData: dispatch(fetchAnnouncement(match.params.id)),

  test: (e) => console.log([e.target.name] == fetchProfile(match.params.id)?"ok":"pasok"), 

})



const announcement = connect(mapStateToProps, mapDispatchToProps)(Announcement);

export default announcement;