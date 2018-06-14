import {
  RECEIVE_BUYING_ERRORS
} from '../actions/asset_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUYING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
