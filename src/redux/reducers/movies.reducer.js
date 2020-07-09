import {actionTypes} from '../constants/actionTypes';

export const initialState = {
  movies: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.movies,
      };
    }
    case actionTypes.GET_MOVIES_FAIL: {
      return {
        ...state,
        movies: action.movies,
      };
    }
    default:
      return state;
  }
}

export default moviesReducer;
