import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  
  render() {
    return (
      
      <form onSubmit={ this.handleFormSubmit }>
        <label htmlFor="loginpage"></label>
        <input type="text" id="username" name="username" placeholder="username" />
        <input type="password" id="password" name="password" placeholder="password" />
        <button type="submit">LogIn</button>

      </form>
    )
  }
}

