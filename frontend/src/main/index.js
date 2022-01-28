const redux =  require('redux');

const CHANGER_USER= 'CHANGER_USER';
const LOGOUT = 'LOGOUT';

//Actions 

function changeUser(user){
  return {
    type: CHANGER_USER,
    info: "changer the current user",
    payload: user
  }
} 

function logout(){
  return {
    type: LOGOUT,
    info: "logout the current user",
  }
}

const initialState = {
  user: '',   
  isLogged: false
}

function userReducer(prevState = initialState, action){
  switch(action.type){
    case CHANGER_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true
      }
    case LOGOUT:
      return {
        ...prevState,
        user: '',
        isLogged: false
      }
    default:
      return prevState
  }
}

//store 

const store = redux.createStore(userReducer);

console.log('initial state', store.getState());
store.dispatch(changeUser('Jean'));
console.log('New state', store.getState());
store.dispatch(logout());
console.log('New state', store.getState());

