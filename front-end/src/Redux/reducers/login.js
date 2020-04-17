import {LOG_USER, INPUT_LOGIN_CHANGE} from '../actions';

const initialState = {
  isLogged:false,
  connectedUser: {
    id: 0,
    firstname: "",
    lastname: "",
    picture: "",
    title: "",
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        isLogged: true, 
      };
    case INPUT_LOGIN_CHANGE:
      return {
        ...state,
        connectedUser: {...state.connectedUser, ...action.payload}
      };
    default:
      return state;
  }
};

export default reducer;