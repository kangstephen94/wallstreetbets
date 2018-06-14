import {RECEIVE_ASSET_OWNERSHIPS} from '../actions/asset_actions';
import merge from 'lodash/merge';


const assetOwnershipReducer = (state=null, action) => {
  switch (action.type) {
    case RECEIVE_ASSET_OWNERSHIPS:
      return action.total;
    default:
      return state;
  }
};

export default assetOwnershipReducer;
