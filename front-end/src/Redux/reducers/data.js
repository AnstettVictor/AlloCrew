import {UPDATE_ANNOUNCEMENT, UPDATE_PROFILE, INPUT_PROFILE_CHANGE, INPUT_ANNOUNCEMENT_CHANGE} from '../actions';

const initialState = {
  prout:0,
  announcements: [
    {
      id: 0,
      category: "",
      active: true,
      voluntary: true,
      dateStart: "",
      dateEnd: "",
      location: "",
      title: "",
      description: "",
      picture: "",
      createdAt: "",
      updatedAt: "",
      user: {
        id: 0,
        firstname: "",
        lastname: "",
        picture: "",
        title:"",        
      }
    }
  ],
  profiles: [
    {
      id: 0,
      firstname:"",
      lastname: "",
      age: 0,
      location: "gffd",  
      title: "",
      description: "",
      experience: "",
      portfolio: "",
      picture: "",
      bannerpicture: ""
    }
  ],
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
  
    case UPDATE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: action.payload, 
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: action.payload, 
      };
    case INPUT_PROFILE_CHANGE:
      return {
        ...state,
        profiles: [{...state.profiles[0], ...action.payload}], 
      };
    case INPUT_ANNOUNCEMENT_CHANGE:
      return {
        ...state,
        announcements: [{...state.announcements[0], ...action.payload}], 
      };
      default:
        return state;
  }
};

export default reducer;