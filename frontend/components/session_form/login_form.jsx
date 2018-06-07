import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return(e) => (
      this.setState({[field]: e.target.value})
    );
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


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="loginpage">
        <div className='loginbackground'></div>
        <div className='logincontainer'>
          <form className='loginform' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='logintitle'>
            <img id="my-img" src='/assets/wallstreet.jpg' onMouseOver={this.hover} onMouseOut={this.unhover} />
            <h1>Welcome to WallStreetBets</h1>
          </div>
            <label className='email'>
              <div>Email</div>
              <input
                className='logininput'
                type='text'
                value={this.state.email}
                onChange={this.update('email')}
                />
            </label>

            <label className='password'>
              <div>Password</div>
              <input
                className='logininput'
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            <div className="loginerrors">{this.renderErrors()}</div>
            <div className='signup-redirect'>Don't have an account? <Link to='/signup'>Click here to sign up!</Link></div>
            <label>
              <input className="signin" type='submit' value='Sign In'/>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default loginForm;
