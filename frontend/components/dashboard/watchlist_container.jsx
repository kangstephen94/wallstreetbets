import { connect } from 'react-redux';
import { retrieveWatchlist } from '../../actions/watchlist_actions';
import { retrieveAllData } from '../../actions/asset_actions';
import WatchList from './watchlist';

const msp = state => ({
  payload: state.entities.watchlist
});

const mdp = dispatch => ({
  retrieveWatchlist: () => dispatch(retrieveWatchlist()),
  retrieveAllData: syms => dispatch(retrieveAllData(syms))
});

export default connect(msp, mdp)(WatchList);
