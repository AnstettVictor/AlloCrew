import {UPDATE_DISCUSSION, INPUT_MESSAGE} from '../actions';

const initialState = {
    message: {
        discussion: 0,
        user: 0,
        content: ""
    },

    by_creator: [{
        id: 0,
        announcement: {
            id:0,
            title: "",
        },
        messages: [{
            id: 0,
            content: "",
            user: {
                id: 0,
                firstname: "",
                lastname: "",
            }
        }],
        receiver: {
            id: 0,
            firstname: "",
            lastname: "",
        },
        creator: {
            id: 0,
            firstname: "",
            lastname: "",
        }
    }],
    by_receiver: [{
        id: 0,
        announcement: {
            id:0,
            title: "",
        },
        messages: [{
            id: 0,
            content: "",
            user: {
                id: 0,
                firstname: "",
                lastname: "",
            }
        }],
        receiver: {
            id: 0,
            firstname: "",
            lastname: "",
        },
        creator: {
            id: 0,
            firstname: "",
            lastname: "",
        }
    }],
  };
  

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISCUSSION:
            return {
              ...state,              
              ...action.payload,
            };
        case INPUT_MESSAGE:
            return {
                ...state,
                message: action.payload,
            }
      default:
        return state;
    }
  };
  
  export default reducer;