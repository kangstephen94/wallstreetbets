import {search} from '../utils/asset_util';

export const SEARCHASSETS = "SEARCHASSETS";
export const CLEARASSETS = "CLEARASSETS";

export const receiveSearch = assets => ({
  type: SEARCHASSETS,
  assets
});

export const searchAssets = query => dispatch => (
  search(query).then( assets => dispatch(receiveSearch(assets)))
);

export const clearAsset = () => ({
  type: CLEARASSETS
});
