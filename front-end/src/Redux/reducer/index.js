import {CHANGE_ANNOUNCEMENT, CHANGE_PROFILE} from '../actions';

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

  profile: {
    firstname:"",
    lastname: "",
    age: 0,
    location: "",  
    title: "",
    description: "",
    experience: "",
    portfolio: "",
    picture: "",
    bannerpicture: "",
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ANNOUNCEMENT:
      return {
        ...state,
        announcement: {...action.payload}, 
      };

    case CHANGE_PROFILE:
      return {
        ...state,
        profile: {...action.payload}, 
      };
      default:
        return state;
  }
};

export default reducer;