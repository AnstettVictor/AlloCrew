import axios from 'axios';


export const CHANGE_ANNOUNCEMENT = 'CHANGE_ANNOUNCEMENT';

export const changeAnnouncement = (payload) => ({
  type: CHANGE_ANNOUNCEMENT,
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