import {put, takeLatest} from 'redux-saga/effects';
import BrowserServices from '../api/browserServices';
import {actionTypes} from '../redux/constants/actionTypes';

const browserServices = new BrowserServices();
function* fetchMovies() {
  try {
    const result = yield browserServices.getMovies();
    yield put({type: actionTypes.GET_MOVIES_SUCCESS, movies: result.movies});
  } catch (e) {
    yield put({type: actionTypes.GET_MOVIES_FAIL, movies: []});
  }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* getMovies() {
  yield takeLatest('GET_MOVIES', fetchMovies);
}
export default [getMovies];
