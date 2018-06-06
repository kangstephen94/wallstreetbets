import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import loginForm from './login_form';

const msp = state => ({
  user: {email: '', password: ''},
  errors: state.errors.session
});

const mdp = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(msp, mdp)(loginForm);
