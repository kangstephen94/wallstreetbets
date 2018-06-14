import { connect } from 'react-redux';
import { retrieveWatchlist } from '../../actions/watchlist_actions';
import WatchList from './watchlist';

const msp = state => ({
  watchlist: Object.values(state.entities.watchlist)
});

const mdp = dispatch => ({
  retrieveWatchlist: () => dispatch(retrieveWatchlist())
});

export default connect(msp, mdp)(WatchList);
