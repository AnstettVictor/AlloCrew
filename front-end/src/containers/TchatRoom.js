import TchatRoom from '../components/TchatRoom';
import {fetchDiscussionList, inputMessage, postMessage, mitraillette, redirect, passId} from '../Redux/actions'
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



const mapDispatchToProps = (dispatch, {match}) => ({

  killRedirect: dispatch(redirect(false)), 
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