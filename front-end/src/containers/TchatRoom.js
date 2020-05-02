import TchatRoom from '../components/TchatRoom';
import {fetchDiscussionList, deleteDiscussion, inputMessage, postMessage, mitraillette, redirect, passId} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({messagerie, login}) => {

  return ({
    content: messagerie.message.content,
    chatList: [...messagerie.by_creator, ...messagerie.by_receiver],
    userId: login.userId
  })
}
;

const mapDispatchToProps = (dispatch) => ({

  redirect: dispatch(redirect("")), 

  fetchData: dispatch(fetchDiscussionList()),

  refreshData: () => dispatch(fetchDiscussionList()),
  
  handleMessage: (e) => dispatch(inputMessage({content: e.target.value})),

  onMessageSubmit: (e) => {
    e.preventDefault();
    dispatch(postMessage(+e.target.id));
    dispatch(inputMessage({content:""}))     
  },

  deleteD: (chatId) => {
    console.log(chatId)
    dispatch(deleteDiscussion(chatId));
  }, 
})
;

const tchatroom = connect(mapStateToProps, mapDispatchToProps)(TchatRoom);

export default tchatroom;