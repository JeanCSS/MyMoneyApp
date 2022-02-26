import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import dashboardReducer from '../dashboard/dashboardReducer';
import LineChartReducer from '../common/chart/lineChartReducer';
import tabReducer from '../common/tab/tabReducer';
import menuReduce from '../common/template/menuReduce';
import billingCycleReducer from '../billingCycle/billingCycleReducer';

const rooReducer = combineReducers({
  dashboard: dashboardReducer,
  lineChart: LineChartReducer,
  tab: tabReducer,
  menu: menuReduce,
  cycles: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rooReducer;