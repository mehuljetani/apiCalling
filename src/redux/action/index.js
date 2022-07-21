import {GET_USER} from './type';

export const getUser = data => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };
};
