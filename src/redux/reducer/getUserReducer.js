import {GET_USER} from '../action/type';

const INITIAL_STATE = {
  arr: [],
};

export const getUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER: {
      // console.log('user Data ::: ', action.payload);
      return {...state, arr: action.payload};
    }
    default: {
      return state;
    }
  }
};
