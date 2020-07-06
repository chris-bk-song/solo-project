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
    
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.dissmissError = this.dissmissError.bind(this);
  }

  dissmissError() {
    this.setState({ error: '' })
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
      this.props.history.push('/loggedin')
    }).catch(
      err => {
        this.setState({ 
          error: err.message
        })
      }
    )
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
          </div>
        </Navbar>

        <div className={styles.FormWrapper}>
          <Form className={styles.LoginForm} onSubmit={ this.handleFormSubmit } autoComplete="off">
            <h3>Sign In</h3>
            <div className={styles.FormGroup}>
              <label><b>Email</b></label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
            </div>
            
            <div className={styles.FormGroup}>
              <label><b>Password</b></label>
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
            </div>
          
            <Button type="submit" className={styles.LoginButton} variant="dark">Log In</Button>
            <p className={styles.LoginLink}>Not a member? <a href="/signup">create account</a></p>
          </Form>
          { this.state.error && 
            <p>{ this.state.error }</p>
          }
        </div>
      </div>
    )
  }
}