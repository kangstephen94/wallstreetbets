import { connect } from 'react-redux';
import { createNewUser, receiveErrors } from '../../actions/session_actions';
import signupForm from './signup_form';

const msp = state => ({
  user: {first_name: '', last_name: '', email: '', password: '', buying_power: 0},
  errors: state.errors.session
});

const mdp = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(msp, mdp)(signupForm);