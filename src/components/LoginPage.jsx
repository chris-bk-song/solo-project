import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

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
        <Button type="submit">LogIn</Button>

      </form>
    )
  }
}

