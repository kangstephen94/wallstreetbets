import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import WatchList from './watchlist';

const msp = state => ({
  currentUser: state.session
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(WatchList);
