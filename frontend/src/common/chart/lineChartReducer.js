const INICIAL_STATE = {dataChart: []};

const LineChartReducer = (state = INICIAL_STATE, action) => { 
  switch (action.type) {
    case 'LINE_CHART_FETCHED':
      return{
        ...state,
        dataChart: action.payload
      }
    default:
      return state;
  }
}

export default LineChartReducer;