import {search, getAsset, getData, buyAsset, getFillData, addWatchlistItem} from '../utils/asset_util';
import {receiveCurrentUser} from './session_actions';

export const SEARCHASSETS = "SEARCHASSETS";
export const CLEARASSETS = "CLEARASSETS";
export const RECEIVEASSET = "RECEIVEASSET";
export const RECEIVEDATA = "RECEIVEDATA";
export const RECEIVEBUY = "RECEIVEBUY";
export const CLEARDATA = "CLEARDATA";
export const RECEIVE_BUYING_ERRORS = "RECEIVE_BUYING_ERRORS";
export const RECEIVE_ASSET_OWNERSHIPS = "RECEIVE_ASSET_OWNERSHIPS";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";

export const addToWatchlist = asset => dispatch => (
  addWatchlistItem(asset).then( asset => dispatch(receiveWatchlistItem))
);

export const retrieveAsset = sym => dispatch => (
  getAsset(sym).then( asset => dispatch(receiveAsset(asset)))
);

export const searchAssets = query => dispatch => (
  search(query).then( assets => dispatch(receiveSearch(assets)))
);

export const retrieveData = (sym, func) => dispatch => (
  getData(sym, func).then( payload => dispatch(receiveData(payload)))
);

export const retrieveBuy = (assetOwnership) => dispatch => (
  buyAsset(assetOwnership).then( payload=> {
    dispatch(receiveCurrentUser(payload.currentUser));
    dispatch(receiveFillData(payload.total));
  }), err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );

  export const receiveWatchlistItem = asset => ({
    type: RECEIVE_WATCHLIST_ITEM,
    asset
  });


  export const receiveFillData = total => ({
    type: RECEIVE_ASSET_OWNERSHIPS,
    total
  });

  export const receiveErrors = errors => ({
    type: RECEIVE_BUYING_ERRORS,
    errors
  });


export const clearData = () => ({
  type: CLEARDATA
});

export const clearAsset = () => ({
  type: CLEARASSETS
});
export const receiveSearch = assets => ({
  type: SEARCHASSETS,
  assets
});

export const receiveAsset = asset => ({
  type: RECEIVEASSET,
  asset
});

export const receiveData = payload => ({
  type: RECEIVEDATA,
  payload
});
