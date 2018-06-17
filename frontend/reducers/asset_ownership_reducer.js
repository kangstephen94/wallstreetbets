import {RECEIVE_ASSET_OWNERSHIPS} from '../actions/asset_actions';
import {RECEIVE_HOLDINGS, CLEAR_HOLDINGS} from '../actions/portfolio_actions';
import merge from 'lodash/merge';


const assetOwnershipReducer = (state=null, action) => {
  switch (action.type) {
    case RECEIVE_ASSET_OWNERSHIPS:
      return action.total;
    case RECEIVE_HOLDINGS:
      return action.payload;
    case CLEAR_HOLDINGS:
      return null;
    default:
      return state;
  }
};

export default assetOwnershipReducer;
