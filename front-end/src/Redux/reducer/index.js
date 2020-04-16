import {CHANGE_ANNOUNCEMENT} from '../actions';

const initialState = {
  announcement: {
    title:"", 
    location:"", 
    description:"", 
    picture:"", 
    voluntary: true,
    id: 0,
    dateStart:"",
    dateEnd:"", 
    active:true,
    user: {
      id: 0,
      firstname:"",
      lastname:"",
      picture:"",
    },
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ANNOUNCEMENT:
      return {
        ...state,
        announcement: {...action.payload}, 
      };
      default:
        return state;
  }
};

export default reducer;