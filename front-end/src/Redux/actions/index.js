//imports
import axios from 'axios';
//vars
const token = () => localStorage.getItem('token')
const userId =  () => {
  if (token)
  return JSON.parse(atob(token().split('.')[1])).id
};

export const LOADING = 'LOADING';
export const LOGIN_OK = 'LOGIN_OK';
export const LOGOUT = 'LOGOUT';
export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
export const UPDATE_PROFILE= 'UPDATE_PROFILE';
export const INPUT_LOGIN_CHANGE= 'INPUT_LOGIN_CHANGE';
export const INPUT_ANNOUNCEMENT_CHANGE= 'INPUT_ANNOUNCEMENT_CHANGE';
export const INPUT_EDITANNOUNCEMENT_CHANGE = 'INPUT_EDITANNOUNCEMENT_CHANGE';
export const INPUT_PROFILE_CHANGE= 'INPUT_PROFILE_CHANGE';
export const INPUT_EDITPROFILE_CHANGE = 'INPUT_EDITPROFILE_CHANGE';
export const RESET_DATA = 'RESET_DATA';
export const INPUT_CREATE_ANNOUNCEMENT= 'INPUT_CREATE_ANNOUNCEMENT';
export const NOTIFICATION= 'NOTIFICATION';
export const CLEAR_NOTIFICATION= 'CLEAR_NOTIFICATION';
export const REGISTER_SUCCESS= 'REGISTER_SUCCESS';

export const loading = () => ({
  type: LOADING,
})

export const resetData = () => ({
  type: RESET_DATA,
})

export const notification = (payload) => ({
  type: NOTIFICATION,
  payload
})

export const clearNotification = (payload) => ({
  type: CLEAR_NOTIFICATION,
  payload
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
})

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

export const inputCreateAnnouncement = (payload) => ({
  type: INPUT_CREATE_ANNOUNCEMENT,
  payload
})

export const inputEditProfileChange = (payload) => ({
  type: INPUT_EDITPROFILE_CHANGE,
  payload
})

export const inputProfileChange = (payload) => ({
  type: INPUT_PROFILE_CHANGE,
  payload
})

export const inputEditAnnouncementChange = (payload) => ({
  type: INPUT_EDITANNOUNCEMENT_CHANGE,
  payload
})


//Appels Ajax

//Login

export const register = () => (dispatch, getState) => {

  if(
    getState().login.data.username === getState().login.data._username
    &&
    getState().login.data.password === getState().login.data._password
  ){
    axios({
      method: 'post',
      url: 'http://3.88.40.169/register',
      data: {
        email: getState().login.data.username,
        password: getState().login.data.password,
      }
    })
    .then(res => {
      dispatch(notification('Votre compte à bien été créé!'))
      setTimeout(() => {dispatch(registerSuccess())}, 3000)
    }) 
    .catch(err => console.log(err))
  }else{
    dispatch(notification('Champs non identiques'))
    setTimeout(() => {dispatch(clearNotification())}, 3000)
  }
}

export const logUser = () => (dispatch, getState) => {
  dispatch(loading());
  axios({
    method: 'post',
    url: 'http://3.88.40.169/api/login_check', 
    data: getState().login.data
  })
  .then((res) => {
    dispatch(loading());
    const _token = res.data.token;
    localStorage.setItem('token', _token);
    dispatch(checkAuth());
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
      Authorization: `bearer ${token()}`,
    },
    method: 'post',
    url: 'http://3.88.40.169/api/token_check', 
  })
  .then(() => {
    axios({
      headers: {
        Authorization: `bearer ${token()}`,
      },
      method: 'get',
      url: `http://3.88.40.169/api/users/${userId()}`, 
    })
    .then((res) => dispatch(loginOk(res.data)) )
  })
  .catch((err) => {
    console.log(err)
    dispatch(logoutUser());
  })
};


//For finding one announcement with id
export const fetchAnnouncement = (id) => (dispatch) => {
   axios({
    method: 'get',
    url: `http://3.88.40.169/api/announcements/${id}`, 
  })
  .then((res) => {
    console.log('notre id',id);
    const announcementData = res.data;
    dispatch(updateAnnouncement(announcementData))
  })
  .catch(err => console.log(err))
};

// For finding one profile with id
export const fetchProfile = (id) => (dispatch) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
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
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'get',
    url: `http://3.88.40.169/api/announcements/`, 
  })
  .then((res) => {
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



export const patchEditProfile = (id) => (dispatch, getState) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'patch',
    url: `http://3.88.40.169/api/users/${id}`, 
    data: 
    {
      firstname: getState().data.profiles[0].firstname,
      lastname: getState().data.profiles[0].lastname,
      age: getState().data.profiles[0].age,
      location: getState().data.profiles[0].location,
      title: getState().data.profiles[0].title,
      description: getState().data.profiles[0].description,
      experience: getState().data.profiles[0].experience,
      portfolio: getState().data.profiles[0].portfolio,
      picture: getState().data.profiles[0].picture,
      bannerpicture: getState().data.profiles[0].bannerpicture,     
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
};

export const patchEditAnnouncement = (id) => (dispatch, getState) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'patch',
    url: `http://3.88.40.169/api/announcements/${id}`, 
    data: 
    { 
      category: "tagazou",
      active: getState().data.announcements[0].active,
      voluntary: getState().data.announcements[0].voluntary,
      dateStart: getState().data.announcements[0].dateStart,
      dateEnd: getState().data.announcements[0].dateEnd,
      location: getState().data.announcements[0].location,
      title: getState().data.announcements[0].title,
      description: getState().data.announcements[0].description,
      picture: getState().data.announcements[0].picture,          
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
};

export const postCreateAnnouncement = () => (dispatch, getState) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'post',
    url: `http://3.88.40.169/api/announcements/`, 
    data: 
    { 
      user_id: getState().login.userId,
      title: "",
      location: "",
      active: true,
      voluntary: true,
      date_start: "2020-06-25T00:00:00+00:00",
      date_end: "2020-06-25T00:00:00+00:00",
      description: "", 
      // user_id: getState().login.userId,
      // category: "default",
      // picture: "default",
      // ...getState().data.create          
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
};

export const passId = (func) => (dispatch, getState) => {
  dispatch(func(getState().login.userId))
}