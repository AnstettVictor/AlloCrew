import axios from 'axios';


export const CHANGE_ANNOUNCEMENT = 'CHANGE_ANNOUNCEMENT';
export const CHANGE_PROFILE= 'CHANGE_PROFILE'

export const changeAnnouncement = (payload) => ({
  type: CHANGE_ANNOUNCEMENT,
  payload: payload
})

export const changeProfile = (payload) => ({
  type: CHANGE_PROFILE,
  payload: payload
})

export const fetchAnnouncement = (id) => (dispatch) => {
  axios.get('https://raw.githubusercontent.com/Largenty/testallo/master/announcement.json')
    .then((res) => {
      console.log('notre id',id);
      const announcementData = res.data.find((e) => e.id == id);
      dispatch(changeAnnouncement(announcementData))
    })
};

export const fetchProfile = (id) => (dispatch) => {
  axios.get('https://raw.githubusercontent.com/Largenty/testallo/master/profile.json')
    .then((res) => {
      console.log('notre id',id);
      const profileData = res.data.find((e) => e.id == id);
      dispatch(changeProfile(profileData))
    })
};