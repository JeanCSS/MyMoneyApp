const INITIAL_STATE = {currentPage: 1, totalPages: 1, billing_cycles: {}};

export default (state = INITIAL_STATE, action) => { 
  switch(action.type){
    case 'BILLING_CYCLES_FETCHED': 
 
      return {
        ...state,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
        billing_cycles: action.payload
      }
    case 'BILLING_CYCLE_UPDATE':
      return {
        ...state,
        billing_cycles: action.payload
      }
    default:
      return state;
  }
}