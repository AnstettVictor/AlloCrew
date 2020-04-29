import CreateAnnouncement from '../components/CreateAnnouncement';
import { inputCreateAnnouncement, updateAnnouncement, fetchAnnouncement,  postCreateAnnouncement, patchEditAnnouncement } from '../Redux/actions';
import {storeImage, sendImage} from '../Redux/actions/imageUpload';
import {connect} from 'react-redux';

const mapStateToProps = ({data, login}) => {

  return({
    ownerId: data.create.user.id,
    userId: login.userId,
    category: data.create.category,
    active: data.create.active, 
    voluntary: data.create.voluntary,
    dateStart: data.create.date_start || data.create.dateStart,
    dateEnd: data.create.date_end || data.create.dateEnd ,
    location: data.create.location,
    title: data.create.title,
    description: data.create.description,
    picture: data.create.picture,
    notification: login.notification,
    redirect: login.redirect  
  })
};

// Fonction qui verifie s'il s'agit d'une édition ou d'une creation d'annonce.
// fait une requete en cas d'edition
const condition = (param) => (dispatch) => {
  if(param) {
    dispatch(fetchAnnouncement(param, 'create'))
  }
  return null
}

const mapDispatchToProps = (dispatch, {match}) => ({

  
  fetchData: dispatch(condition(match.params.id)),

  handleChange: (e) => dispatch(inputCreateAnnouncement({[e.target.name]: e.target.value})),

  handleChangeEditor: (e, editor) => dispatch(inputCreateAnnouncement({["description"]: editor.getData()}
)),
  handleDateChange: (date, evt) => dispatch(inputCreateAnnouncement({[evt.target.classList[1]]: date})),

  handleChecked: (e) => { if(e.target.checked && e.target.value == ('paid')){
    dispatch(inputCreateAnnouncement({'voluntary': false}))
    }else{
      dispatch(inputCreateAnnouncement({'voluntary': true}))
    }
  },

  onCreateAnnouncementSubmit: (e) => {e.preventDefault(); dispatch(postCreateAnnouncement())},
  onEditAnnouncementSubmit: (e) => {e.preventDefault();dispatch(patchEditAnnouncement(match.params.id))},

  appendImage: (e) => dispatch(storeImage(e)),

  uploadImage: () => dispatch(sendImage(inputCreateAnnouncement, 'picture')) 


})
;

const createAnnouncement = connect(mapStateToProps, mapDispatchToProps)(CreateAnnouncement);

export default createAnnouncement;