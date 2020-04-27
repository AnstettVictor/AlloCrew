import Announcement from '../components/Announcement';
import {fetchAnnouncement, checkData, loading, passId, loginOk, fetchProfile} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data, login}, {match}) => {

  // if data isnt in the list , load from db
  let announcement = data.announcements.find(one => one.id == match.params.id)
  if (!announcement) {
    announcement = data.announcement
  }
  
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



const mapDispatchToProps = (dispatch, {match}) => {

 const id = match.params.id

  return  ({
  checkData: dispatch(checkData(id)),
})
}




const announcement = connect(mapStateToProps, mapDispatchToProps)(Announcement);

export default announcement;