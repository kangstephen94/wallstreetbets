import { RECEIVEASSET } from '../actions/asset_actions';
import merge from 'lodash/merge';


const assetReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVEASSET:
      return merge({}, {[action.asset.symbol]: action.asset});
    default:
      return state;
  }
};

export default assetReducer;
