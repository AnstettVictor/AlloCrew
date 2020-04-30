import MyAnnouncements from '../components/MyAnnouncements';
import {fetchAnnouncementList, deleteAnnouncement, redirect} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data, login }) => {
  return ({
    list: data.announcements,
    userId: login.userId
  })
};

const mapDispatchToProps = (dispatch) => ({
  redirect: dispatch(redirect(false)),
  fetchData: dispatch(fetchAnnouncementList()),

})
;

const myannouncements = connect(mapStateToProps, mapDispatchToProps)(MyAnnouncements);

export default myannouncements;