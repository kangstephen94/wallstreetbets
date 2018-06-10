import {search, getAsset} from '../utils/asset_util';

export const SEARCHASSETS = "SEARCHASSETS";
export const CLEARASSETS = "CLEARASSETS";
export const RECEIVEASSET = "RECEIVEASSET";

export const retrieveAsset = id => dispatch => (
  getAsset(id).then( asset => dispatch(receiveAsset(asset)))
);


export const searchAssets = query => dispatch => (
  search(query).then( assets => dispatch(receiveSearch(assets)))
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
