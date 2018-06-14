import { connect } from 'react-redux';
import BuySell from './buy_sell';
import { Link, withRouter } from 'react-router-dom';
import {retrieveBuy, receiveErrors} from '../../actions/asset_actions';
import {addToWatchlist, removeFromWatchlist, retrieveWatchlist} from '../../actions/watchlist_actions';

const msp = (state, ownProps) => ({
  asset: state.entities.assets[ownProps.match.params.sym],
  currentUser: state.session,
  errors: state.errors.buying_selling,
  totalStock: state.entities.assetOwnership,
  watchlistItems: state.entities.watchlist,
  });

const mdp = dispatch => ({
  buyAsset: assetOwnership => dispatch(retrieveBuy(assetOwnership)),
  addToWatchlist: asset_id => dispatch(addToWatchlist(asset_id)),
  clearErrors: () => dispatch(receiveErrors([])),
  removeFromWatchlist: asset_id => dispatch(removeFromWatchlist(asset_id)),
  retrieveWatchlist: () => dispatch(retrieveWatchlist())
});

export default withRouter(connect(msp, mdp)(BuySell));
