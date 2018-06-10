import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import assetReducer from './asset_reducer';

export default combineReducers({
  users: usersReducer,
  assets: assetReducer,
  searchedAssets: searchReducer
});
