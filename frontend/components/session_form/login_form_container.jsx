import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { retrieveWatchlist } from '../../actions/watchlist_actions';
import loginForm from './login_form';

const msp = state => ({
  user: {email: '', password: ''},
  errors: state.errors.session
});

const mdp = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveErrors([])),
  retrieveWatchlist: () => dispatch(retrieveWatchlist())
});

export default connect(msp, mdp)(loginForm);
