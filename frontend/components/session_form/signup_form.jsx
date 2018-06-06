import React from 'react';

class signupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(() => this.props.history.push('/'));
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
      <form className='signupform' onSubmit={(e) => this.handleSubmit(e)}>
        <label>First Name:
        <input
          type='text'
          value={this.state.first_name}
          onChange={this.update('first_name')}
          />
      </label>
      <br></br>
        <label>Last Name:
        <input
          type='text'
          value={this.state.last_name}
          onChange={this.update('last_name')}
          />
      </label>
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
       <input type='submit' value='Create User'/>
      </form>
    </div>
    );
  }
}

export default signupForm;
