import {LOADING, REDIRECT, LOGIN_OK, LOGOUT, INPUT_LOGIN_CHANGE, NOTIFICATION, CLEAR_NOTIFICATION, REGISTER_SUCCESS} from '../actions';

const initialState = {
  registerSuccess: false,
  isLogged:true,
  userId: -1,
  notification: "",
  userInfo: {},
  data: {
    username:"",
    password:"",
    _username:"",
    _password:"",
  },
};


const reducer = (state = initialState, action) => {
  console.log('mon actio',action.payload)
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case REDIRECT:
      return {
        ...state,
        redirect: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: "",
      };
    case NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    case LOGIN_OK:
      return {
        ...state,
        isLogged: true,
        userId: action.payload[0].id,
        userInfo: action.payload[0],
        data:{}
                 
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