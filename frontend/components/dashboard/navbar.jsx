import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './searchbar_container';
import {SearchResults} from './search_results';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    console.log(this.props);
    this.props.logout();
  }

  hover () {
    const element = document.getElementById('my-img');
    console.log(element);
    element.setAttribute('src', 'https://image.ibb.co/dt16oT/wallstreet_hover.png');
  }

  unhover() {
    const element = document.getElementById('my-img');
    element.setAttribute('src', 'https://image.ibb.co/gzyVF8/wallstreet.png');
  }

  render () {
    const {currentUser, searchResults} = this.props;
    return (
        <div className="dash-nav">
          <div className="dash-nav-content">
          <Link to='/'>
          <img id="my-img" src='https://image.ibb.co/gzyVF8/wallstreet.png' onMouseOver={this.hover} onMouseOut={this.unhover} />
        </Link>
          <ul className="nav-links">
            <li><SearchBarContainer /></li>
            <li><SearchResults searchResults={searchResults}/></li>
            <li id='currentuser'>{currentUser.first_name}</li>
            <li><a href='' onClick={this.handleClick}>Logout</a></li>
          </ul>
          </div>
        </div>
      );
  }
}

export default NavBar;
