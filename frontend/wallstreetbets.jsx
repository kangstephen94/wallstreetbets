import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {createNewUser, login, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: window.currentUser
    };
  }
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
