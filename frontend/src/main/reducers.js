import {combineReducers} from 'redux';
import dashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import menuReduce from '../common/template/menuReduce';
import billingCycleReducer from '../billingCycle/billingCycleReducer';

const rooReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  menu: menuReduce,
  cycles: billingCycleReducer
});

export default rooReducer;