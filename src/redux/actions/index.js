import {actionTypes} from '../constants/actionTypes';

export function saveValue(value) {
  return {
    type: actionTypes.SAVE_VALUE,
    value,
  };
}
export function getMovies() {
  return {
    type: actionTypes.GET_MOVIES,
  };
}
