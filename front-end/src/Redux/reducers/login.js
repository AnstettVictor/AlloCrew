import {LOG_USER, INPUT_LOGIN_CHANGE} from '../actions';

const initialState = {
  data: {
    username:"",
    password:""
  },
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
  console.log(action.payload)
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        isLogged: true,
                 
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