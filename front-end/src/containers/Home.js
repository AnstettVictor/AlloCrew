import Home from '../components/Home';
import {fetchAnnouncementList} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state)
  return({
    list: state.data.announcements
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchAnnouncementList: dispatch(fetchAnnouncementList()) 
})
;

const home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default home;
