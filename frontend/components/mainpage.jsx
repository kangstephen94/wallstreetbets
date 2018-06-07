import React from 'react';
import { connect } from 'react-redux';
import SplashContainer from './splash/splash_container';
import Dashboard from './dashboard/dashboard';

const msp = (state, ownProps) => ({
  currentUser: state.session.id
});



const MainPage = ({currentUser}) => {
  const renderPage = currentUser ? <Dashboard /> : <SplashContainer />;
  return (
    renderPage
  );
};

export default connect(msp)(MainPage);
