import {getWatchlist, addWatchlistItem, removeWatchlistItem} from '../utils/watchlist_util';
import  {receiveErrors} from '../actions/asset_actions';
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";
export const CLEAR_WATCHLIST = "CLEAR_WATCHLIST";



export const retrieveWatchlist = () => dispatch => (
  getWatchlist().then( payload => dispatch(receiveWatchlist(payload)))
);

export const addToWatchlist = id => dispatch => (
  addWatchlistItem(id).then( watchlistItem => dispatch(receiveWatchlistItem(watchlistItem)))
 );

export const removeFromWatchlist = id => dispatch => (
  removeWatchlistItem(id).then( () => dispatch(clearWatchlist()))
);

export const receiveWatchlist = payload => ({
  type: RECEIVE_WATCHLIST,
  payload
});


  export const receiveWatchlistItem = watchlistItem => ({
    type: RECEIVE_WATCHLIST_ITEM,
    watchlistItem
  });

  export const clearWatchlist = () => ({
    type: CLEAR_WATCHLIST
  });
