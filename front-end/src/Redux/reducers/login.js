import {LOGIN_OK, INPUT_LOGIN_CHANGE} from '../actions';

const initialState = {
  isLogged:false,
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
  console.log(action.payload)
  switch (action.type) {
    case LOGIN_OK:
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