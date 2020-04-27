import TchatRoom from '../components/TchatRoom';
import {fetchDiscussionList, inputMessage, postMessage, passId} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({messagerie, login}) => {
  console.log("containersTCHAT", {messagerie})
  return ({
    by_creator: messagerie.by_creator,
    by_receiver: messagerie.by_receiver,
    userId: login.userId,
    message: messagerie.message.content,  
  })
}
;

export const mitraillette = (id) => (dispatch) => {
  setInterval(() => {dispatch(fetchDiscussionList(id))}, [1000])
}

const mapDispatchToProps = (dispatch, {match}) => ({
  console: console.log("match", {match}),
  fetchData: dispatch(mitraillette(match.params.id)),
  handleMessage: (e) => dispatch(inputMessage({["content"]: e.target.value})),
  onMessageSubmit: (e) => {
    e.preventDefault();
    console.log("ACTIONSSUBIMIT ID",e.target.name);
    dispatch(postMessage(e.target.name)); 
    dispatch(inputMessage({["content"]: ""}))     
  },
  refresh :dispatch(fetchDiscussionList(match.params.id)) 
})
;

const tchatroom = connect(mapStateToProps, mapDispatchToProps)(TchatRoom);

export default tchatroom;