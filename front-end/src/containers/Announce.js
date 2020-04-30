import Announce from '../components/AnnouncementList/Announce.js';
import {deleteAnnouncement} from '../Redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => ({ 

  deleteD: (e) => {
    e.preventDefault();
    console.log("ACTIONSSUBIMIT ID",e.target);
    dispatch(deleteAnnouncement(e.target.name));
  },
  
})


const announce = connect(mapStateToProps, mapDispatchToProps)(Announce);

export default announce;