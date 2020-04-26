import TchatRoom from '../components/TchatRoom';
import {fetchDiscussionList, inputMessage} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({messagerie, login}) => {
  console.log("containersTCHAT", {messagerie})
  return ({
    by_creator: messagerie.by_creator,
    by_receiver: messagerie.by_receiver,
    userId: login.userId,
    message: messagerie.message,  
  })
}
;

const mapDispatchToProps = (dispatch, {match}) => ({
  console: console.log("match", {match}),
  fetchData: dispatch(fetchDiscussionList(match.params.id)),
  handleMessage: (e) => dispatch(inputMessage({[e.target.name]: e.target.value}))
})
;

const tchatroom = connect(mapStateToProps, mapDispatchToProps)(TchatRoom);

export default tchatroom;