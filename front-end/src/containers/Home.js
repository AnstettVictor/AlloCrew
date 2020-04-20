import Home from '../components/Home';
import {fetchProfile, fetchAnnouncementList, logoutUser} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data, login}) => {
  return({
    userId: login.userId,
    homeProfile: data.profiles[0],
    list: data.announcements
  })
};

//fonction intermediaire pour passer le state à mapdispatchtoprops en utilisant thunk
const passId = () => (dispatch, getState) => {
  dispatch(fetchProfile(getState().login.userId))
}

const mapDispatchToProps = (dispatch) =>{
 return ({
  fetchHomeProfile: dispatch(passId()),
  fetchAnnouncements: dispatch(fetchAnnouncementList()),
  logout: () => dispatch(logoutUser())
})
};



const home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default home;
