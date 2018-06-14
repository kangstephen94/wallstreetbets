import {RECEIVE_WATCHLIST, RECEIVE_WATCHLIST_ITEM, CLEAR_WATCHLIST} from '../actions/watchlist_actions';
import merge from 'lodash/merge';


const WatchlistReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return merge({}, action.watchlist);
    case RECEIVE_WATCHLIST_ITEM:
      return merge({}, action.watchlistItem);
    case CLEAR_WATCHLIST:
      return {};
    default:
      return state;
  }
};

export default WatchlistReducer;
