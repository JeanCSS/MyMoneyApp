const INITIAL_STATE = {summary: {credito: 0, debito: 0}};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SUMMARY_FETCHED':  
      return {
        ...state,
        summary: action.payload
      }
    default:
      return state;
  }
}