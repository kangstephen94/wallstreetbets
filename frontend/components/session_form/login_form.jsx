import React from 'react';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
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
        <h1>Welcome to WallStreetBets</h1>
        <label>Email:
        <input
          type='text'
          value={this.state.email}
          onChange={this.update('email')}
          />
      </label>
        <label>Password:
        <input
          type='password'
          value={this.state.password}
          onChange={this.update('password')}
          />
      </label>
       <input type='submit' value='Login'/>
      </form>
    </div>
    </div>
    );
  }
}

export default loginForm;
