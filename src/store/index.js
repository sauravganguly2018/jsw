import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import rootReducer from './reducers/index'; // Assuming you have a rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;