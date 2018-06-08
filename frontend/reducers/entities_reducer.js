import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  users: usersReducer,
  searchedAssets: searchReducer
});
