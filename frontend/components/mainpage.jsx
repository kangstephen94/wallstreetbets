import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';

const msp = (state, ownProps) => ({
  currentUser: state.session.id
});



const MainPage = ({currentUser}) => {
  const renderPage = currentUser ? <Dashboard /> : <Splash />;
  return (
    renderPage
  );
};

export default connect(msp)(MainPage);
