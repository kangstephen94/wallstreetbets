import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    const {currentUser} = this.props;
    return (
    <div className="navbar">
      <p>{currentUser.first_name}</p>
      <a href='' onClick={this.handleClick}>Logout</a>
    </div>
    );
  }
}

export default NavBar;
