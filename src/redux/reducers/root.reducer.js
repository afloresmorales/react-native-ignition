import {combineReducers} from 'redux';
import browser from './browser.reducer';
import movies from './movies.reducer';

export default combineReducers({
  browser,
  movies,
});
