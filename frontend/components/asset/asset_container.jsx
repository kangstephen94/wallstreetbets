import { connect } from 'react-redux';
import {retrieveAsset, retrieveData, updateAsset, clearData} from '../../actions/asset_actions';
import {retrieveWatchlist} from '../../actions/watchlist_actions';
import {clearPointedPrice} from '../../actions/custom_tool_tip_actions';

import Asset from './asset';

const msp = (state, ownProps) => ({
  asset: state.entities.assets[ownProps.match.params.sym],
  data: Object.values(state.entities.data),
});

const mdp = dispatch => ({
  retrieveAsset: sym => dispatch(retrieveAsset(sym)),
  retrieveData: (sym,func) => dispatch(retrieveData(sym, func)),
  updateAsset: sym => dispatch(updateAsset(sym)),
  clearData: () => dispatch(clearData()),
  retrieveWatchlist: () => dispatch(retrieveWatchlist()),
  clearPointedPrice: () => dispatch(clearPointedPrice())
});

export default connect(msp, mdp)(Asset);
