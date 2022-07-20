import {DELETE_USER, GET_USER, UPDATE_USER} from '../action/type';

const INITIAL_STATE = {
  arr: [],
};

export const getUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER: {
      // console.log('user Data ::: ', action.payload);
      return {...state, arr: action.payload};
    }
    case DELETE_USER: {
      console.log('action payload - ', action.payload);
      return {arr: state.arr.filter(arr => arr.id != action.payload)};
    }
    case UPDATE_USER: {
      console.log('update action Payload - ', action.payload);
      // let final = state.arr.map(item => {
      //   if (item.id === action.payload.id) {
      //     return {
      //       // id: action.payload.id,
      //       name: action.payload.name,
      //       email: action.payload.email,
      //     };
      //   }
      //   return item;
      // });

      // console.log('state  --- - - - - -', state);

      // return {
      //   arr: final,
      // };
    }
    default: {
      return state;
    }
  }
};
