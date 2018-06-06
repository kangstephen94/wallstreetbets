import React from 'react';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/'));
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
      <div>
        {this.renderErrors()}
      <form className='loginform' onSubmit={(e) => this.handleSubmit(e)}>
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
    );
  }
}

export default loginForm;
