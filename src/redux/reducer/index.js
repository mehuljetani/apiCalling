import {combineReducers} from 'redux';
import {getUserReducer} from './getUserReducer';

const reducers = combineReducers({
  getUser: getUserReducer,
});

export default reducers;
