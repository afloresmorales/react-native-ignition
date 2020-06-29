import {actionTypes} from '../constants/actionTypes';

export const initialState = {
  value: '',
};

function browserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_VALUE: {
      return {
        ...state,
        value: action.value,
      };
    }
    default:
      return state;
  }
}

export default browserReducer;
