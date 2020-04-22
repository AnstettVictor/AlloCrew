import {UPDATE_ANNOUNCEMENT, UPDATE_PROFILE, INPUT_PROFILE_CHANGE, INPUT_ANNOUNCEMENT_CHANGE, INPUT_EDITPROFILE_CHANGE, INPUT_EDITANNOUNCEMENT_CHANGE, INPUT_CREATE_ANNOUNCEMENT, RESET_DATA} from '../actions';

const initialState = {
  create: {
    title: "",
    location: "",
    active: true,
    voluntary: true,
    date_start: "2020-06-25T00:00:00+00:00",
    date_end: "2020-06-25T00:00:00+00:00",
    description: "",     
  },
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
  editProfile:[{}],
  editAnnouncement:[{}],
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
  console.log(action.payload)
  switch (action.type) {
    case INPUT_CREATE_ANNOUNCEMENT:
      return {
        ...state,
        create: {...state.create, ...action.payload}, 
      };

    case RESET_DATA:
      return {
      state: {}
      };
    
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
    case INPUT_EDITPROFILE_CHANGE:
      return {
        ...state,
        editProfile: [{...state.editProfile, ...action.payload}], 
      };
      case INPUT_EDITANNOUNCEMENT_CHANGE:
        return {
          ...state,
          editAnnouncement: [{...state.editAnnouncement, ...action.payload}], 
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