import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Form } from 'react-bootstrap'
import styles from './LoginPage.module.css'
import { auth } from '../firebase'

export default class LoginPage extends Component {
  constructor() {
    super();
    
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }


  
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.email) {
      return this.setState({ error: 'Email is required' })
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' })
    }
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(user => {
      console.log(user)
    })
  }
  
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
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
        <Navbar className={styles.NavBarNew} bg="light" expand="lg">
          <Navbar.Brand className={styles.NavLeft} href="/"><b>Salt & Pepper</b></Navbar.Brand>
          <div className={styles.NavRight}>
            <a href="/"><Button variant="light" className="btn-sm">Home</Button></a>
            <a href="/signup"><Button variant="light" className="btn-sm">Sign up</Button></a>
          </div>
        </Navbar>
        <Form className="LoginForm" onSubmit={ this.handleFormSubmit } autoComplete="off">
          <label>Email</label>
          <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="email" />
          
          <label>Password</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="password" />
          
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    )
  }
}