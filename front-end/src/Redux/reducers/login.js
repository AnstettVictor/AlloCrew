import {LOGIN_OK, LOGOUT, INPUT_LOGIN_CHANGE} from '../actions';

const initialState = {
  isLogged:false,
  userId: -1,
  data: {
    username:"",
    password:""
  },
  connectedUser: {
    id: 0,
    firstname: "",
    lastname: "",
    picture: "",
    title: "",    
  }
};


const reducer = (state = initialState, action) => {
  console.log('mon actio',action.payload)
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        isLogged: true,
        userId: action.payload
                 
      };
      case LOGOUT:
      return {
        ...state,
        isLogged: false,
                 
      };
    case INPUT_LOGIN_CHANGE:
      return {
        ...state,
        data: {...state.data, ...action.payload}
      };
    default:
      return state;
  }
};

export default reducer;