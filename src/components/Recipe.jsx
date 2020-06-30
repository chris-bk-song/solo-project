import React, { Component } from 'react';

import RecipeDetail from './RecipeDetail';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button } from 'react-bootstrap';

import styles from './Recipe.module.css';


export default class Recipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeName: '',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let recipe = this.state.recipeName
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=644cf81819bd45b8a428df385604dc1c&query=${recipe}`)
    .then(res => res.json())
    .then(data => {
      if (data.Recipe) {
        this.setState({
          recipeName: data.Recipe
        })
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      recipeName: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.Background}>
        <header>
          <h1>Search for Recipe</h1>
          <form onSubmit={ this.handleFormSubmit } >
            <input type="text" id="recipe" value={ this.state.recipeName } onChange={ this.handleChange} placeholder="Search for recipes">
            </input>
            <Button type="submit">Search</Button>
          </form>
        </header>
        <Container className={styles.RecipeBox}>
          { this.state.recipeName.localeCompare((recipe, index) => {
            return (
              <RecipeDetail recipe={ recipe } index={ index } /> 
            )
          })}
        </Container>
      </div>
    )
  }
}