import React, { Component } from 'react';

import RecipeDetail from './RecipeDetail';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button, Nav } from 'react-bootstrap';

import styles from './Recipe.module.css';


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
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=644cf81819bd45b8a428df385604dc1c&query=${recipe}`)
    // fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=644cf81819bd45b8a428df385604dc1c&includeNutrition=true`)
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
        <Nav className={styles.NavBar}>
          <h1>Salt and Pepper</h1>
          <form onSubmit={ this.handleFormSubmit } >
            <input type="text" id="recipe" value={ this.state.recipeName } onChange={ this.handleChange} placeholder="Search for recipes">
            </input>
            <Button type="submit">Search</Button>
          </form>
          <a href="/login"><Button>Login</Button></a>
          <a href="/signup"><Button>SignUp</Button></a>
        </Nav>
        <header>
        </header>
        <Container className={styles.RecipeBox}>
          { this.state.recipes.map((recipe, index) => {
            return (
              <RecipeDetail recipe={ recipe } index={ index } /> 
            )
          })}
        </Container>
      </div>
    )
  }
}