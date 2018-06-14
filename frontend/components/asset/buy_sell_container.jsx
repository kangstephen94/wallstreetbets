import { connect } from 'react-redux';
import BuySell from './buy_sell';
import { Link, withRouter } from 'react-router-dom';
import {retrieveBuy} from '../../actions/asset_actions';

const msp = (state, ownProps) => ({
  asset: state.entities.assets[ownProps.match.params.sym],
  currentUser: state.session,
  errors: state.errors.buying_selling,
  totalStock: state.entities.assetOwnership
  });

const mdp = dispatch => ({
  buyAsset: assetOwnership => dispatch(retrieveBuy(assetOwnership)),
});

export default withRouter(connect(msp, mdp)(BuySell));
