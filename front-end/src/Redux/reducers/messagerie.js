

const initialState = {
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
        creator: {
            id: 0,
            firstname: "",
            lastname: "",
        }
    }],
  };
  

  const reducer = (state = initialState, action) => {
    console.log('mon actio',action.payload)
    switch (action.type) {
 
      default:
        return state;
    }
  };
  
  export default reducer;