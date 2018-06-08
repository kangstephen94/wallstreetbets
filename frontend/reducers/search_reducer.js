import { SEARCHASSETS, CLEARASSETS } from '../actions/asset_actions';
import merge from 'lodash/merge';


const searchReducer = (state={}, action) => {
  switch (action.type) {
    case SEARCHASSETS:
      return merge({}, action.assets);
    case CLEARASSETS:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
