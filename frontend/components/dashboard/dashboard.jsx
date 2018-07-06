import React from 'react';
import NavBarContainer from './navbar_container';
import WatchListContainer  from './watchlist_container';
import PortfolioContainer  from './portfolio_container';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isLoaded: false};
    this.changeState = this.changeState.bind(this);
  }

  componentWillMount () {
    setTimeout(this.changeState, 1200);
  }


  changeState () {
    this.setState({isLoaded: true});
  }


  render () {

    let el;
    if (this.state.isLoaded) {
      el = (
      <div className='dashboard'>
        <NavBarContainer />
        <div className='port-watch-flex'>
        <PortfolioContainer />
        <WatchListContainer />
        </div>
      </div>);
    } else {
      el = (<div className="loader2">Loading...</div>);
    }
    return (
      el
    );
  }
}

  export default Dashboard;
