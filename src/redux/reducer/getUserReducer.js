import {GET_USER} from '../action/index';

const INITIAL_STATE = {
  arr: [],
};

const getUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER: {
      console.log('reducer state', action.payload);
      return {...state, arr: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default getUserReducer;
