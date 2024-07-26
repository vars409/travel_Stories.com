const initialState = {
    user: null,
    bookings: [],
    destinations: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // define your action handlers
      default:
        return state;
    }
  };
  
  export default rootReducer;
  