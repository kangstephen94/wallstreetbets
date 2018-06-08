import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const msp = state => ({
  currentUser: state.session,
  searchResults: Object.values(state.entities.searchedAssets)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);
