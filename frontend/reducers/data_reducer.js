import { RECEIVEDATA } from '../actions/asset_actions';
import merge from 'lodash/merge';


const dataReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVEDATA:
      return merge({}, action.data);
    default:
      return state;
  }
};

export default dataReducer;
