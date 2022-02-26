import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers); 

export default store;
