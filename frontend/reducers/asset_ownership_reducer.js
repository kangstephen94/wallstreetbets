import {RECEIVEBUY} from '../actions/asset_actions';
import merge from 'lodash/merge';


const assetOwnershipReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVEBUY:
      return merge({}, action.assetOwnership);
    default:
      return state;
  }
};

export default assetOwnershipReducer;
