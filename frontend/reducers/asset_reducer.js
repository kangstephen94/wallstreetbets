import { RECEIVEASSET, RECEIVEDATA} from '../actions/asset_actions';
import merge from 'lodash/merge';


const assetReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVEASSET:
      return merge({}, {[action.asset.symbol]: action.asset});
    case RECEIVEDATA:
      return merge({}, {[action.payload.asset.symbol]: action.payload.asset});
    default:
      return state;
  }
};

export default assetReducer;
