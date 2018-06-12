import {search, getAsset, getData} from '../utils/asset_util';

export const SEARCHASSETS = "SEARCHASSETS";
export const CLEARASSETS = "CLEARASSETS";
export const RECEIVEASSET = "RECEIVEASSET";
export const RECEIVEDATA = "RECEIVEDATA";

export const retrieveAsset = sym => dispatch => (
  getAsset(sym).then( asset => dispatch(receiveAsset(asset)))
);


export const searchAssets = query => dispatch => (
  search(query).then( assets => dispatch(receiveSearch(assets)))
);

export const retrieveData = (sym, func) => dispatch => (
  getData(sym, func).then( data => dispatch(receiveData(data)))
);

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

export const receiveData = data => ({
  type: RECEIVEDATA,
  data
});
