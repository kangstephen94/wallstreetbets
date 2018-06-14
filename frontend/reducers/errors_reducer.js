import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import buyingSelling from './buying_errors_reducer';

export default combineReducers({
  session,
  buying_selling: buyingSelling
});
