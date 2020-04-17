import {CHANGE_ANNOUNCEMENT, CHANGE_PROFILE} from '../actions';

const initialState = {

  

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