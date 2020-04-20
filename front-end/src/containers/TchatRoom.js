import TchatRoom from '../components/TchatRoom';
import {fetchAnnouncementList, fetchProfileList} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({login}) => ({
  userId: login.userId,
})
;

const mapDispatchToProps = (dispatch) => ({
  
})
;

const tchatroom = connect(mapStateToProps, mapDispatchToProps)(TchatRoom);

export default tchatroom;