import {LOGIN_OK, LOGOUT, INPUT_LOGIN_CHANGE} from '../actions';

const initialState = {
  isLogged:false,
  userId: -1,
  userInfo: {},
  data: {
    username:"",
    password:""
  },
};


const reducer = (state = initialState, action) => {
  console.log('mon actio',action.payload)
  switch (action.type) {
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