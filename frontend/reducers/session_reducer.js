import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullSession = {
  id: null,
  email: null,
  first_name: null,
  last_name: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {id: action.user.id,
        email: action.user.email,
        first_name: action.user.first_name,
        last_name: action.user.last_name});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
