import {CHANGE_ANNOUNCEMENT} from '../actions';

const initialState = {

  isLogged:false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
        case LOG_USER:
      return {
        ...state,
        isLogged: true, 
      };
      
      default:
        return state;
  }
};

export default reducer;