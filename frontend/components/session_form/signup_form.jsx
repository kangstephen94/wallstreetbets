import React from 'react';
import { Link } from 'react-router-dom';

class signupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.retrieveWatchlist();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  update(field) {
    return(e) => (
      this.setState({[field]: e.target.value})
    );
  }

  hover () {
    const element = document.getElementById('my-img');
    element.setAttribute('src', 'https://image.ibb.co/dt16oT/wallstreet_hover.png');
  }

  unhover() {
    const element = document.getElementById('my-img');
    element.setAttribute('src', 'https://image.ibb.co/gzyVF8/wallstreet.png');
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
      <div className='signuppage'>
      <div className='signupbackground'></div>
      <div className='signupcontainer'>
      <form className='signupform' onSubmit={(e) => this.handleSubmit(e)}>
        <div className='signuptitle'>
          <Link to='/'>
          <img id="my-img" src='https://image.ibb.co/gzyVF8/wallstreet.png' onMouseOver={this.hover} onMouseOut={this.unhover} />
        </Link>
          <div className='create-new-user'>Sign up and start trading!</div>
        </div>
        <div className='firstname'>
        <input
          className='createinput'
          placeholder='First name'
          type='text'
          value={this.state.first_name}
          onChange={this.update('first_name')}
          />
      </div>
        <div className='lastname'>
        <input
          className='createinput'
          placeholder='Last name'
          type='text'
          value={this.state.last_name}
          onChange={this.update('last_name')}
          />
      </div>
        <div className='email'>
        <input
          className='createinput'
          placeholder='Email address'
          type='text'
          value={this.state.email}
          onChange={this.update('email')}
          />
      </div>
        <div className='password'>
        <input
          className='createinput'
          placeholder='Password (min. 6 characters)'
          type='password'
          value={this.state.password}
          onChange={this.update('password')}
          />
      </div>
      <div className='signuperrors'>{this.renderErrors()}</div>
      <div className='login-redirect'>Already have an account? <Link to='/login'>Click here to login</Link></div>
       <input className='createuser' type='submit' value='Create User'/>
      </form>
      </div>
    </div>
    );
  }
}

export default signupForm;
