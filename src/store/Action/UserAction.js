import {ADD_USER, DELETE_USER} from '../Type';

export const createUser = user => async dispatch => {
  console.log('inside act', user);
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};

export const deleteUser = username => async dispatch => {
  dispatch({
    type: DELETE_USER,
    payload: username,
  });
};
