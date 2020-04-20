import axios from 'axios';

export const LOG_USER = 'LOG_USER';
export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
export const UPDATE_PROFILE= 'UPDATE_PROFILE';
export const INPUT_LOGIN_CHANGE= 'INPUT_LOGIN_CHANGE';
export const INPUT_ANNOUNCEMENT_CHANGE= 'INPUT_ANNOUNCEMENT_CHANGE';
export const INPUT_PROFILE_CHANGE= 'INPUT_PROFILE_CHANGE';



export const logUser = () => ({
  type: LOG_USER,  
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
export const login = () => (dispatch, getState) => {
  axios({
    method: 'post',
    url: 'http://3.88.40.169/api/login_check', 
    data: getState().localUser
  })
  .then((res) => {
    localStorage.setItem('token', res.data.token);
    dispatch(logUser());
  })
  .catch((err) => console.log(err))
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
  axios.get(`http://3.88.40.169/api/users/${id}`)
    .then((res) => {
      console.log('notre id',id);
      const profileData = res.data
      dispatch(updateProfile(profileData))
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

