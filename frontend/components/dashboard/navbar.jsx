import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBarContainer from './searchbar_container';
import {SearchResults} from './search_results';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.sym !== nextProps.match.params.sym) {
      this.props.clearAsset();
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.props.clearHoldings();
    this.props.logout();
  }

  hover () {
    const element = document.getElementById('my-img');
    element.setAttribute('src', 'https://image.ibb.co/dt16oT/wallstreet_hover.png');
  }

  unhover() {
    const element = document.getElementById('my-img');
    element.setAttribute('src', 'https://image.ibb.co/gzyVF8/wallstreet.png');
  }

  handleModalClick (e) {
    const modal = document.getElementById('search-result');
    if (modal) {
    modal.style.display = 'block';
    }
  }

  render () {
    const {currentUser, searchResults} = this.props;
    return (
        <div className="dash-nav">
          <div className="dash-nav-content">
          <div id="dash-icon">
            <Link to='/'>
              <img id="my-img" src='https://image.ibb.co/gzyVF8/wallstreet.png' onMouseOver={this.hover} onMouseOut={this.unhover} />
            </Link>
          </div>
          <div className='search-container' onClick={this.handleModalClick}>
            <SearchBarContainer />
            <SearchResults searchResults={searchResults} />
          </div>
          <ul className="nav-links">
            <li id='currentuser'>{currentUser.first_name}</li>
            <li id='logout'><a href='' onClick={this.handleClick}>Logout</a></li>
          </ul>
          </div>
        </div>
      );
    }
  }
export default withRouter(NavBar);
