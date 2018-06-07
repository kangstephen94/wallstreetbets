import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const msp = state => ({
  user: {email: "SteveyJ@gmail.com", password: 'password' }
});

const mdp = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(Splash);
