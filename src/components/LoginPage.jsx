import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import styles from './LoginPage.module.css'

export default class LoginPage extends Component {
  constructor() {
    super();
    
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }


  
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' })
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' })
    }
    console.log(this.state.username)
    console.log(this.state.password)
  }
  
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <div className={styles.Login}>
        <form onSubmit={ this.handleFormSubmit } autocomplete="off">
          <label>Username</label>
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleUsernameChange} placeholder="username" />
          
          <label>Password</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="password" />
          
          <Button type="submit">Log In</Button>
        </form>
      </div>
    )
  }
}