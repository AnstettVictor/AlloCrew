
import {UPDATE_ANNOUNCEMENT, UPDATE_PROFILE, UPDATE_PROFILES, INPUT_PROFILE_CHANGE, INPUT_ANNOUNCEMENT_CHANGE, INPUT_EDITANNOUNCEMENT_CHANGE,  INPUT_CREATE_ANNOUNCEMENT, RESET_DATA, LOADING, LOADED} from '../actions';

import {IMAGE_IN_STATE} from '../actions/imageUpload'


const initialState = {
  isloading: false,
  create: {
    category: "default",
    active: true,
    voluntary: true,
    date_start: "2020-10-10T00:00:00+00:00",
    date_end: "2020-10-10T00:00:00+00:00",
    location: "",
    title: "",
    description: "",
    picture:"",
    user: {id: 0}  
  },
  announcements: [
    {
      active: true,
      category: "default",
      dateStart: "2020-10-10T00:00:00+00:00",
      dateEnd: "2020-10-10T00:00:00+00:00",
      description: "",
      id: 0,
      location: "",
      picture: "",
      title: "",      
      user: {
        firstname: "",
        id: 0,        
        lastname: "",
        picture: "",                
      },
      voluntary: true,
    }
  ],
  announcement: {
    active: true,
    category: "default",
    dateStart: "2020-10-10T00:00:00+00:00",
    dateEnd: "2020-10-10T00:00:00+00:00",
    description: "",
    id: 0,
    location: "",
    picture: "",
    title: "",      
    user: {
      firstname: "",
      id: 0,        
      lastname: "",
      picture: "",                
    },
    voluntary: true,
  },
  editAnnouncement:  {    
    active: true,
    category: "default",
    date_start: "2020-10-10T00:00:00+00:00",
    date_end: "2020-10-10T00:00:00+00:00",
    description: "",    
    location: "",
    picture: "",
    title: "",
    voluntary: true,},

  editProfile:{},
  profiles: [
    {
      id: 0,
      firstname:"",
      lastname: "",
      age: 0,
      location: "",  
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


    case IMAGE_IN_STATE:
      return {
        ...state,
        ...action.payload
      };

    case LOADED:
      return {
        ...state,
        isloading: false,
      };
    case LOADING:
      return {
        ...state,
        isloading: true, 
      };
    case INPUT_CREATE_ANNOUNCEMENT:
      return {
        ...state,
        create: {...state.create, ...action.payload}, 
      };
    case UPDATE_ANNOUNCEMENT:
      return {
        ...state,
        ...action.payload,
      };

    case INPUT_EDITANNOUNCEMENT_CHANGE:
      return {
        ...state,
        editAnnouncement: {...state.editAnnouncement, ...action.payload}, 
      };

    case RESET_DATA:
      return {
        ...state,
        create: initialState.create, 
      };
    
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: action.payload, 
      };

    

      case UPDATE_PROFILES:
        return {
          ...state,
          ...action.payload, 
        };
    case INPUT_PROFILE_CHANGE:
      return {
        ...state,
        profiles: [{...state.profiles[0], ...action.payload}], 
      };

  
    
    case INPUT_ANNOUNCEMENT_CHANGE:
      return {
        ...state,
        announcements:[...state.data.announcements], 
      };

    
      default:
        return state;
  }
};

export default reducer;