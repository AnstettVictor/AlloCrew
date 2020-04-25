import TchatRoom from '../components/TchatRoom';
import {} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({messagerie, login}) => {
  
  return ({
    creator: messagerie.by_creator,
    receiver: messagerie.by_receiver,
    userId: login.userId,
  })
}
;

const mapDispatchToProps = (dispatch) => ({
  
})
;

const tchatroom = connect(mapStateToProps, mapDispatchToProps)(TchatRoom);

export default tchatroom;