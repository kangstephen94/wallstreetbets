import merge from 'lodash/merge';
import {UPDATE_POINTED_PRICE, CLEAR_POINTED_PRICE} from '../actions/custom_tool_tip_actions';

const customToolTipReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_POINTED_PRICE:
      return action.pointedPrice;
    case CLEAR_POINTED_PRICE:
      return null;
    default:
      return state;
  }
};

export default customToolTipReducer;
