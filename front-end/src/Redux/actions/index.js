//imports
import axios from 'axios';
import { Redirect, browserHistory } from 'react-router-dom';


//vars
const token = () => localStorage.getItem('token')
const userId =  () => {
  if (token)
  return JSON.parse(atob(token().split('.')[1])).id
};

export const LOADED = 'LOADED';
export const LOADING = 'LOADING';
export const LOGIN_OK = 'LOGIN_OK';
export const LOGOUT = 'LOGOUT';
export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
export const UPDATE_PROFILE= 'UPDATE_PROFILE';

export const UPDATE_USER= 'UPDATE_USER';

export const UPDATE_PROFILES= 'UPDATE_PROFILES';

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
export const UPDATE_DISCUSSION= 'UPDATE_DISCUSSION';
export const INPUT_MESSAGE='INPUT_MESSAGE';
export const REDIRECT ='REDIRECT';


export const redirect = (payload) => ({
  type: REDIRECT,
  payload
})

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

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: payload
})
;

export const updateProfile = (payload) => ({
  type: UPDATE_PROFILE,
  payload: payload
})
;

export const updateProfiles = (payload) => ({
  type: UPDATE_PROFILES,
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



export const inputProfileChange = (payload) => ({
  type: INPUT_PROFILE_CHANGE,
  payload
})

export const inputMessage =(payload) => ({
  type: INPUT_MESSAGE,
  payload
})

export const updateDiscussion = (payload) => ({
  type: UPDATE_DISCUSSION,
  payload: payload
})
;

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
      url: 'http://3.86.88.23/register',
      data: {
        email: getState().login.data.username,
        password: getState().login.data.password,
      }
    })
    .then(res => {
      dispatch(notification('Votre compte à bien été créé!'))
      setTimeout(() => {dispatch(registerSuccess())}, 2000)
    }) 
    .catch(err => {console.log(err.response); dispatch(notification('Veuillez saisir une adresse mail valide'))})
  }else{
    dispatch(notification('Champs non identiques'))
    setTimeout(() => {dispatch(clearNotification())}, 2000)
  }
}

export const logUser = () => (dispatch, getState) => {
  axios({
    method: 'post',
    url: 'http://3.86.88.23/api/login_check', 
    data: getState().login.data
  })
  .then((res) => {
    console.log(res)
    const _token = res.data.token;
    localStorage.setItem('token', _token);
    dispatch(checkAuth());
  })
  .catch((err) => {
    console.log(err.response)
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
    url: 'http://3.86.88.23/api/token_check', 
  })
  .then(() => {
    axios({
      headers: {
        Authorization: `bearer ${token()}`,
      },
      method: 'get',
      url: `http://3.86.88.23/api/users/${userId()}`, 
    })
    .then((res) => dispatch(loginOk(res.data)) )
  })
  .catch((err) => {
    console.log(err)
    dispatch(logoutUser());
  })
};

//to re-fetch data if necessary
export const checkData = (id) => (dispatch, getState) => {

  if (!getState().data.announcements.find(one => one.id == id)) {
    dispatch(fetchAnnouncement(id, 'announcement'))
  }
};

//For finding one announcement with id
export const fetchAnnouncement = (id, key) => (dispatch) => {

  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'get',
    url: `http://3.86.88.23/api/announcements/${id}`, 
  })
  .then((res) => {
    console.log(res);
    const announcementData = res.data;
    dispatch(updateAnnouncement({[key]: announcementData[0]}))
  })

}


// For finding one profile with id
export const fetchProfile = (id) => (dispatch, getState) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'get',
    url: id? `http://3.86.88.23/api/users/${id}`: `http://3.86.88.23/api/users/${getState().login.userId}`,  
  })
  .then((res) => {
    console.log(res)   
    if(res.data.id == getState().login.userId){dispatch(updateUser(res.data))} 
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
    url: `http://3.86.88.23/api/announcements/`, 
  })
  .then((res) => {
    console.log(res.status)
    const announcementListData = res.data
    dispatch(resetData())
    dispatch(updateAnnouncement({announcements: announcementListData}))
  })
  .catch(err => {if(err.response.status == 401){dispatch(logout())}})
};

// For finding a profile List
export const fetchProfileList = () => (dispatch) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'get',
    url: `http://3.86.88.23/api/users/`,
  })
    .then((res) => {console.log(res.status)
      const profilesListData = res.data
      dispatch(resetData())
      dispatch(updateProfiles({profiles: profilesListData}))
    })
};

export const patchEditProfile = (id) => (dispatch, getState) => {
  const {id, ...data} = getState().login.userInfo;
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'patch',
    url: `http://3.86.88.23/api/users/${id}`, 
    data
  })
  .then((res) => {console.log(res); dispatch(redirect(true))})
  .catch((err) => console.log(err))
};

export const patchEditAnnouncement = (id) => (dispatch, getState) => {
  const {id, createdAt, updatedAt, user, dateStart: date_start, dateEnd: date_end, ...data} = getState().data.create;
  console.log(date_start)
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'patch',
    url: `http://3.86.88.23/api/announcements/${id}`, 
    data: {
      date_end,
      date_start,
      ...data
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err.response))
};

export const postCreateAnnouncement = () => (dispatch, getState) => {
  const {user, ...data} = getState().data.create
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'post',
    url: `http://3.86.88.23/api/announcements/`, 
    data: {
      user: getState().login.userId,
      ...data
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err.response))
};




//Middleware pour passer l'id à mapDispatchToProps
export const passId = (func) => (dispatch, getState) => {
  dispatch(func(getState().login.userId))
}


export const fetchDiscussionList = (id) => (dispatch) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'get',
    url: `http://3.86.88.23/api/discussions/${id}`, 
  })
  .then((res) => {
    console.log("res.data",res.data)
    const discussionListData = res.data
    dispatch(updateDiscussion(discussionListData))
  })
  .catch(err => console.log(err))
};


export const postMessage = (id) => (dispatch, getState) => {
  console.log("axios", id)
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'post',
    url: `http://3.86.88.23/api/messages/`, 
    data: 
    { 
      discussion: id,
      user: getState().login.userId,
      content: getState().messagerie.message.content
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
};

export const mitraillette = (id) => (dispatch) => {
  setInterval(() => {dispatch(fetchDiscussionList(id))}, [2000])
}

export const postDiscussion = ({announcement_id, user_id}) => (dispatch, getState, fds) => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'post',
    url: `http://3.86.88.23/api/discussions/`, 
    data: 
    { console: console.log('test'),
      announcement: announcement_id,
      receiver: user_id,
      creator: getState().login.userId,
    }
  })
  // <Redirect to={`/tchat-room/${getState().login.userId}`} />
  .then((res) => {console.log('la res', res); dispatch(redirect(true)) })
  .catch((err) => console.log(err.response))
};



export const deleteDiscussion = (id) => () => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'delete',
    url: `http://3.86.88.23/api/discussions/${id}`,    
  })
  // <Redirect to={`/tchat-room/${getState().login.userId}`} />
  .then((res) => console.log('la res', res))
  .catch((err) => console.log(err.response))
};


export const deleteAnnouncement = (id) => () => {
  axios({
    headers: {
      Authorization: `bearer ${token()}`,
    },
    method: 'delete',
    url: `http://3.86.88.23/api/announcements/${id}`,   
  })
  
  .then((res) => console.log('la res', res))
  .catch((err) => console.log(err.response))
};


