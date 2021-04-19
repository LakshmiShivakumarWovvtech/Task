import {ADD_USER, DELETE_USER} from '../Type';

const initialState = {
  user: [],
};

export default function (state = initialState, action) {
  //   console.log('inside red', user);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter(val => val.name != action.payload),
      };
    default:
      return state;
  }
}
