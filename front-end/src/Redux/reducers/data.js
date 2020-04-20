import {UPDATE_ANNOUNCEMENT, UPDATE_PROFILE, INPUT_PROFILE_CHANGE, INPUT_ANNOUNCEMENT_CHANGE, UPDATE_PASSWORD, UPDATE_MAIL, INPUT_PASSWORD_CHANGE, INPUT_MAIL_CHANGE} from '../actions';

const initialState = {
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
  password: [{
    password:"",
  }],
  mail: [{
    mail:"",
  }]
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
    
    case INPUT_PASSWORD_CHANGE:
      return {
        ...state,
        password: [{...state.password[0], ...action.payload}], 
      };

    case INPUT_MAIL_CHANGE:
      return {
        ...state,
        mail: [{...state.mail[0], ...action.payload}], 
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload, 
      };
      case UPDATE_MAIL:
    return {
      ...state,
      mail: action.payload, 
    };
      default:
        return state;
  }
};

export default reducer;