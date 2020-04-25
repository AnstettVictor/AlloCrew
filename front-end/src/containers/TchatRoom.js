import TchatRoom from '../components/TchatRoom';
import {fetchDiscussionList} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({messagerie, login}) => {
  console.log("containers", {messagerie})
  return ({
    by_creator: messagerie.by_creator,
    by_receiver: messagerie.by_receiver,
    userId: login.userId,
  })
}
;

const mapDispatchToProps = (dispatch, {match}) => ({
  console: console.log("match", {match}),
  fetchData: dispatch(fetchDiscussionList(match.params.id))
})
;

const tchatroom = connect(mapStateToProps, mapDispatchToProps)(TchatRoom);

export default tchatroom;