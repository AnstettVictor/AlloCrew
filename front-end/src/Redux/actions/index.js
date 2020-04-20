//imports
import axios from 'axios';
//vars
const token = localStorage.getItem('token');
const userId = JSON.parse(atob(token.split('.')[1])).id;



export const LOGIN_OK = 'LOGIN_OK';
export const LOGOUT = 'LOGOUT';
export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
export const UPDATE_PROFILE= 'UPDATE_PROFILE';
export const INPUT_LOGIN_CHANGE= 'INPUT_LOGIN_CHANGE';
export const INPUT_ANNOUNCEMENT_CHANGE= 'INPUT_ANNOUNCEMENT_CHANGE';
export const INPUT_PROFILE_CHANGE= 'INPUT_PROFILE_CHANGE';


export const loginOk = (payload) => ({
  type: LOGIN_OK, 
  payload 
})
;

export const logout = () => ({
  type: LOGOUT,  
})
;

export const updateAnnouncement = (payload) => ({
  type: UPDATE_ANNOUNCEMENT,
  payload: payload
})
;

export const updateProfile = (payload) => ({
  type: UPDATE_PROFILE,
  payload: payload
})
;

export const inputLoginChange = (payload) => ({
  type: INPUT_LOGIN_CHANGE,
  payload
})

export const inputAnnouncementChange = (payload) => ({
  type: INPUT_ANNOUNCEMENT_CHANGE,
  payload
})

export const inputProfileChange = (payload) => ({
  type: INPUT_PROFILE_CHANGE,
  payload
})


//Appels Ajax

//Login
export const logUser = () => (dispatch, getState) => {
  axios({
    method: 'post',
    url: 'http://3.88.40.169/api/login_check', 
    data: getState().login.data
  })
  .then((res) => {
    const _token = res.data.token;
    localStorage.setItem('token', _token);
    dispatch(loginOk(userId));
  })
  .catch((err) => {
    console.log(err)
    dispatch(logoutUser());
  })
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logout())
};


export const checkAuth = () => (dispatch) => {
  axios({
    headers: {
      Authorization: `bearer ${token}`,
    },
    method: 'post',
    url: 'http://3.88.40.169/api/token_check', 
  })
  .then(() => {
    dispatch(loginOk(userId))
  })
  .catch((err) => {
    console.log(err)
    dispatch(logoutUser());
  })
};


//For finding one announcement with id
export const fetchAnnouncement = (id) => (dispatch) => {
  axios.get(`http://3.88.40.169/api/announcements/${id}`)
    .then((res) => {
      console.log('notre id',id);
      const announcementData = res.data;
      dispatch(updateAnnouncement(announcementData))
    })
};

// For finding one profile with id
export const fetchProfile = (id) => (dispatch) => {
  axios({
    headers: {
      Authorization: `bearer ${token}`,
    },
    method: 'get',
    url: `http://3.88.40.169/api/users/${id}`, 
  })
  .then((res) => {
    dispatch(updateProfile(res.data))
  })
  .catch((err) => {
    console.log(err)
  })
};


// For finding an announcement List
export const fetchAnnouncementList = () => (dispatch) => {
  axios.get(`https://raw.githubusercontent.com/Largenty/testallo/master/announcement.json`)
    .then((res) => {
      console.log(res.data)
      const announcementListData = res.data
      dispatch(updateAnnouncement(announcementListData))
    })
};

// For finding a profile List
export const fetchProfileList = () => (dispatch) => {
  axios.get(`https://raw.githubusercontent.com/Largenty/testallo/master/profile.json`)
    .then((res) => {
      const profileListData = res.data
      dispatch(updateProfile(profileListData))
    })
};

