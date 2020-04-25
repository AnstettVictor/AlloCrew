import Home from '../components/Home';
import {fetchProfile, fetchAnnouncementList, logoutUser, passId, loa} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data, login}) => {
  return({
    userId: login.userId,
    homeProfile: login.userInfo,
    list: data.announcements
  })
};


const mapDispatchToProps = (dispatch) =>{
 return ({
  fetchHomeProfile: dispatch(passId(fetchProfile)),  
  fetchAnnouncements: dispatch(fetchAnnouncementList()),
  logout: () => dispatch(logoutUser())
})
};



const home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default home;
