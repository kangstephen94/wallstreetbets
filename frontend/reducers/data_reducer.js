import { RECEIVEDATA, CLEARDATA } from '../actions/asset_actions';
import merge from 'lodash/merge';


const dataReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVEDATA:
      return merge({}, action.payload);
    case CLEARDATA:
      return {};
    default:
      return state;
  }
};

export default dataReducer;
