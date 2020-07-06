import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Form } from 'react-bootstrap'
import styles from './SignupPage.module.css'
import { db, auth } from '../firebase'

export default class SignupPage extends Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
    }
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(user => {
      console.log(user)
      db.collection('users').doc(user.user.uid).set({
        firstname: this.state.firstname,
        lasttname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
      })
    })
    this.props.history.push('/login')

    console.log(this.state.firstname)
    console.log(this.state.lastname)
    console.log(this.state.username)
    console.log(this.state.password)

  }

  handleFirstnameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    })
  }

  handleLastnameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    })
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

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    return (
      <div className={styles.Signup}>
        <Navbar className={styles.NavBarNew} bg="light" expand="lg">
          <Navbar.Brand className={styles.NavLeft} href="/"><b>Salt & Pepper</b></Navbar.Brand>
          <div className={styles.NavRight}>
            <a href="/"><Button variant="light" className="btn-sm">Home</Button></a>
          </div>
        </Navbar>

        <div className={styles.FormWrapper}>
          <Form className={styles.SignupForm} onSubmit={ this.handleFormSubmit } autoComplete="off">
            <h3>Create an Account</h3>

            <div className={styles.FormGroup}>
              <label><b>First name</b></label>
              <input type="text" id="firstname" name="firstname" value={ this.state.firstname } onChange={ this.handleFirstnameChange }></input>
            </div>

            <div className={styles.FormGroup}>
              <label><b>Last name</b></label>
              <input type="text" id="lastname" name="lastname" value={ this.state.lastname } onChange={ this.handleLastnameChange }></input>
            </div>
          
            <div className={styles.FormGroup}>
              <label><b>Username</b></label>
              <input type="text" id="username" name="username" value={ this.state.username } onChange={ this.handleUsernameChange }></input>
            </div>

            <div className={styles.FormGroup}>
              <label><b>Email</b></label>
              <input type="email" id="email" name="email" value={ this.state.email } onChange={ this.handleEmailChange }></input>
            </div>

            <div className={styles.FormGroup}>
              <label><b>Passowrd</b></label>
              <input type="password" id="password" name="password" value={ this.state.password } onChange={ this.handlePasswordChange }></input>
            </div>

            <Button type="submit" className={styles.SignupButton} variant="dark">Sign Up</Button>
            <p className={styles.LoginLink}>Already registered? <a href="/login">sign in</a></p>
          </Form>
        </div>
      </div>
    )
  }
}