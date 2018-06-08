import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import MainPageContainer from './mainpage';
import {AuthRoute} from '../utils/route_util';

const App = () => (
  <div className='app'>
  <Switch>
    <Route exact path="/" component={MainPageContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Redirect to="/"></Redirect>
  </Switch>
  </div>
);

export default App;
