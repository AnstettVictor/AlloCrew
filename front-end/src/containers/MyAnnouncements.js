import MyAnnouncements from '../components/MyAnnouncements';
import {fetchAnnouncementList, deleteAnnouncement} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data, login }) => {
  return ({
    list: data.announcements,
    userId: login.userId
  })
};

const mapDispatchToProps = (dispatch) => ({
    
  fetchData: dispatch(fetchAnnouncementList()),

})
;

const myannouncements = connect(mapStateToProps, mapDispatchToProps)(MyAnnouncements);

export default myannouncements;