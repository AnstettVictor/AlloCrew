import {notification, clearNotification, inputLoginChange, updateAnnouncement} from '../../actions';
import axios from 'axios';

//image upload 

export const IMAGE_IN_STATE = 'IMAGE_IN_STATE';

export const imageInState = (payload) => ({
  type: IMAGE_IN_STATE,
  payload
})

export const sendImage = (action, key, file='file') => (dispatch, getState) => {
  dispatch(notification('Chargement de l\'image, veuillez patienter...'));
  const data = new FormData;
  data.append('file', getState().login.data[file]);
  data.append('upload_preset', 'allocrew');

  axios.post('https://api.cloudinary.com/v1_1/dmpokkwma/image/upload', data)
  .then(res => {dispatch(clearNotification()); dispatch(action({[key]: res.data.url}))})
  .catch(err => {dispatch(notification('une erreur s\'est produite'));console.log(err)})
}

export const storeImage = (e, name='file') => (dispatch) => {
  dispatch(inputLoginChange({ [name]: e.target.files[0]}))
}
