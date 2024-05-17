import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchListData from './listReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    home: fetchListData
    // add other reducers here
  });

  export default rootReducer;