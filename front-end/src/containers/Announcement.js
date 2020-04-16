import Announcement from '../components/Announcement';
import {changeName, fetchAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state.announcement)
return({
  title: state.announcement.title,
  location: state.announcement.location,
  description: state.announcement.description,
})
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchAnnouncement())
});

const announcement = connect(mapStateToProps, mapDispatchToProps)(Announcement);

export default announcement;