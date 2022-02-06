const INITIAL_STATE = {totalPages: 1, billing_cycles: {}};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'BILLING_CYCLES_FETCHED': 
      return {
        ...state,
        totalPages: action.totalPages,
        billing_cycles: action.payload
      }
    default:
      return state;
  }
}