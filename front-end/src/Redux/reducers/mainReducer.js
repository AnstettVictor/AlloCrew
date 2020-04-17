import {UPDATE_ANNOUNCEMENT} from '../actions';

const initialState = {
  announcements: [
    {
      id: 0,
      category: "",
      active: null,
      voluntary: null,
      dateStart: "",
      dateEnd: "",
      location: "",
      title: "",
      description: "",
      picture: "",
      createdAt: "",
      updatedAt: null,
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
  switch (action.type) {
    case UPDATE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: {...action.payload}, 
      };
      default:
        return state;
  }
};

export default reducer;