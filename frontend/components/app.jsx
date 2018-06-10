import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
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
import AssetContainer from './asset/asset_container';
import {AuthRoute} from '../utils/route_util';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    const modal = document.getElementById('search-result');
    const search = document.getElementById('search-bar');
    if (modal) {
    if (e.target !== modal && e.target !== search) {
      modal.style.display = "none";
    }
  }
  }

  render () {
    return (
  <div onClick={this.handleClick} className='app' >
  <Switch>
    <Route exact path="/" component={MainPageContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route path="/assets/:id" component={AssetContainer} />
    <Redirect to="/"></Redirect>
  </Switch>
  </div>
  );
}

}
export default App;
