import {DELETE_USER, GET_USER, UPDATE_USER} from './type';

export const getUser = data => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };
};

export const deleteUser = id => {
  return dispatch => {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  };
};

export const updateUser = data => {
  return dispatch => {
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
  };
};
