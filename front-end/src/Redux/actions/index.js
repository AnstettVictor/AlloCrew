import axios from 'axios';
import data from 'utils/Data/a.js';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export const changeTitle = (payload) => ({
  type: CHANGE_TITLE,
  payload: payload
})

export const fetchAnnouncement = () => (dispatch) => {
  axios.get('https://raw.githubusercontent.com/Largenty/testallo/master/announcement.json')
    .then((res) => {
      console.log(res.data[0]);
      const announcement = res.data[0];
      dispatch(changeTitle(announcement))
    })
};