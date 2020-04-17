import axios from 'axios';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';


export const CHANGE_ANNOUNCEMENT = 'CHANGE_ANNOUNCEMENT';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOG_USER = 'LOG_USER';

export const changeAnnouncement = (payload) => ({
  type: CHANGE_ANNOUNCEMENT,
  payload: payload
})

export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload
})

export const logUser = () => ({
  type: LOG_USER,
})


export const checkAuth = () => (dispatch, getState) => {
  console.log(getState().localUser)
  
  const URL = 'http://3.88.40.169/api/login_check';
  axios({
    method: 'post',
    url: PROXY_URL+URL, 
    data: getState().localUser
  })
  .then((res) => {
    localStorage.setItem('token', res.data.token);
    dispatch(logUser());
  })
  .catch((err) => console.log(err))
};




export const fetchAnnouncement = (id) => (dispatch) => {
  axios.get(PROXY_URL+`http://3.88.40.169/api/announcements/${id}`,{headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }})
    .then((res) => {
      console.log('notre id',res);
      const announcementData = res.data.find((e) => e.id == id);
      dispatch(changeAnnouncement(announcementData))
    })
};

