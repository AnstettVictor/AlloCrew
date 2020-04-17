import {CHANGE_ANNOUNCEMENT, INPUT_CHANGE, LOG_USER} from '../actions';

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
  },
  localUser: {
    password:"",
    username:""
  },
  isLogged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        isLogged: true, 
      };
    case CHANGE_ANNOUNCEMENT:
      return {
        ...state,
        announcement: {...action.payload}, 
      };
    case INPUT_CHANGE:
      return {
        ...state,
        localUser: {...state.localUser, ...action.payload}
      };
    // case LOGIN:
    //   return {
    //     ...state,
    //     localUser: {...action.payload}, 
    //   };
      default:
        return state;
  }
};

export default reducer;