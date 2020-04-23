import CreateAnnouncement from '../components/CreateAnnouncement';
import { inputCreateAnnouncement,  postCreateAnnouncement, passId, inputLoginChange, notification, clearNotification} from '../Redux/actions'
import {connect} from 'react-redux';
import axios from 'axios';

const mapStateToProps = ({data, login}) => {

  return({
    category: data.create.category,
    active: data.create.active, 
    voluntary: data.create.voluntary,
    dateStart: data.create.date_start,
    dateEnd: data.create.date_end,
    location: data.create.location,
    title: data.create.title,
    description: data.create.description,
    picture: data.create.picture,
    notification: login.notification  
  })
};



const storeImage = (e) => (dispatch, getState) => {
  dispatch(inputLoginChange({ fileToUpload: e.target.files[0]}))
}

const sendImage = () => (dispatch, getState) => {
  dispatch(notification('Chargement de l\'image, veuillez patienter...'));
  const data = new FormData;
  data.append('file', getState().login.data.fileToUpload);
  data.append('upload_preset', 'allocrew')
  axios.post('https://api.cloudinary.com/v1_1/dmpokkwma/image/upload', data)
  .then(res => {dispatch(clearNotification()); dispatch(inputCreateAnnouncement({picture: res.data.url}))})
  .catch(err => {dispatch(notification('une erreur s\'est produite'));console.log(err)})
  dispatch(loading());
}

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputCreateAnnouncement({[e.target.name]: e.target.value})), 
  handleChangeEditor: (e, editor) => dispatch(inputCreateAnnouncement({["description"]: editor.getData()}
)),
  handleDateChange: (date, evt) => dispatch(inputCreateAnnouncement({[evt.target.classList[1]]: date})),
  onCreateAnnouncementSubmit: (e) => {e.preventDefault(); dispatch(passId(postCreateAnnouncement))},
  handleChecked: (e) => {console.log(e.target.checked); dispatch(inputCreateAnnouncement({'voluntary': e.target.checked}))},
  handleNotChecked: (e) => {console.log(e.target.checked); dispatch(inputCreateAnnouncement({'voluntary': !e.target.checked}))},

  appendImage: (e) => dispatch(storeImage(e)),
  uploadImage: () => dispatch(sendImage()) 
})
;

const createAnnouncement = connect(mapStateToProps, mapDispatchToProps)(CreateAnnouncement);

export default createAnnouncement;