import {search, getAsset, getData, buyAsset} from '../utils/asset_util';

export const SEARCHASSETS = "SEARCHASSETS";
export const CLEARASSETS = "CLEARASSETS";
export const RECEIVEASSET = "RECEIVEASSET";
export const RECEIVEDATA = "RECEIVEDATA";
export const RECEIVEBUY = "RECEIVEBUY";
export const CLEARDATA = "CLEARDATA";

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
  buyAsset(assetOwnership).then( assetOwnership => dispatch(receiveBuy(assetOwnership)))
);


export const clearData = () => ({
  type: CLEARDATA
});

export const clearAsset = () => ({
  type: CLEARASSETS
});

export const receiveBuy = assetOwnership => ({
  type: RECEIVEBUY,
  assetOwnership
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
