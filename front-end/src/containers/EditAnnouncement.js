import EditAnnouncement from '../components/EditAnnouncement';
import {fetchAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ announcement }) => {
  console.log(announcement)
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
  fetchData: dispatch(fetchAnnouncement(match.params.id))
})
;

const announcement = connect(mapStateToProps, mapDispatchToProps)(EditAnnouncement);

export default announcement;