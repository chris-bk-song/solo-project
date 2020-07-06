import React, { Component } from 'react';
import { Container, Button, Form, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeDetailLoggedin from './RecipeDetailLoggedin';
import styles from './LoggedinPage.module.css';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeName: '',
      recipes: [],
    }
  } 
  
  handleChange = (e) => {
    console.log ()
    this.setState({
      recipeName: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let recipe = this.state.recipeName
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cdbc56563e5e4b63822789c78ea57883&query=${recipe}`)
    .then(res => res.json())
    .then(data => {
      if (data.results) {
        this.setState({
          recipes: data.results
        })
      }
    })
  }

  render() {
    return (
      <div className={styles.Background}>
        <Navbar className={styles.NavBarNew} bg="light" expand="lg">
          <Navbar.Brand className={styles.NavLeft} href="/loggedin"><b>Salt & Pepper</b></Navbar.Brand>
          <Form className={styles.SearchForm} onSubmit={ this.handleFormSubmit } inline autocomplete="off">
            <input className="mr-sm-1" type="text" id="recipe" value={ this.state.recipeName } onChange={ this.handleChange} placeholder="Search for recipes"></input>
            <Button variant="outline-success" className="btn-floating btn-sm" type="submit">Search</Button>
          </Form>
          <div className={styles.NavRight}>
          <Button variant="light"><Link to='/savelist' className={styles.LinkButton} class="btn-sm">Saved Recipes</Link></Button>
          <a href="/"><Button variant="light" className="btn-sm" color="black">Log out</Button></a>
          </div>
        </Navbar>

        <img className={styles.Image} src="./images/cookingboard-cropped.jpg" alt="cooking board" />
        <hr />
        <Container className={styles.RecipeBox}>
          { this.state.recipes.map((recipe, index) => {
            return (
              <RecipeDetailLoggedin recipe={ recipe } key={ index } /> 
            )
          })}
        </Container>
      </div>
    )
  }
}