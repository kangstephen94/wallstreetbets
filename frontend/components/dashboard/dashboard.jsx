import React from 'react';
import NavBarContainer from './navbar_container';
import WatchListContainer from './watchlist_container';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBarContainer />
      <div className="watchlist">
      <WatchListContainer />
      </div>
    </div>
  );
};


export default Dashboard;
