import React from 'react';

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
    element.setAttribute('src', '/assets/wallstreet-hover.jpg');
  }

  unhover() {
    const element = document.getElementById('my-img');
    element.setAttribute('src', '/assets/wallstreet.jpg');
  }

  render () {
    const {currentUser} = this.props;
    return (
      <div className="splash">
        <div className="splash-nav">
          <div className="splash-nav-content">
          <img id="my-img" src='/assets/wallstreet.jpg' onMouseOver={this.hover} onMouseOut={this.unhover} />
          <ul className="links">
            <li>{currentUser.first_name}</li>
            <li><a href='' onClick={this.handleClick}>Logout</a></li>
          </ul>
          </div>
        </div>
      </div>
      );
  }
}

export default NavBar;
