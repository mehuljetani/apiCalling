import {combineReducers} from 'redux';
import getUserReducer from '../reducer/getUserReducer';

const reducers = combineReducers({
  getUserRedux: getUserReducer,
});

export default reducers;
