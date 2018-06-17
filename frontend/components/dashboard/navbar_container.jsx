import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearAsset } from '../../actions/asset_actions';
import { clearHoldings } from '../../actions/portfolio_actions';
import NavBar from './navbar';

const msp = state => ({
  currentUser: state.session,
  searchResults: Object.values(state.entities.searchedAssets)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  clearAsset: () => dispatch(clearAsset()),
  clearHoldings: () => dispatch(clearHoldings())
});

export default connect(msp, mdp)(NavBar);
