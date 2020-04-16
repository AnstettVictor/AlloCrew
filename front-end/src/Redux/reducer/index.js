import {CHANGE_TITLE} from '../actions';

const initialState = {
  announcement: {

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        announcement: {...action.payload}, 
      };
      default:
        return state;
  }
};

export default reducer;