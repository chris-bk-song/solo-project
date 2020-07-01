import React, { Component } from 'react';

import RecipeDetail from './RecipeDetail';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button, Form, Navbar } from 'react-bootstrap';

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
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=67c41709350d4b19bd7705edd26e778a&query=${recipe}`)
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
        <Navbar bg="light" expand="lg" className={styles.NavBarNew}>
        <Navbar.Brand href="#home"><b>Salt & Pepper</b></Navbar.Brand>
          <Form inline onSubmit={ this.handleFormSubmit } autocomplete="off">
            <input className="mr-sm-2" type="text" id="recipe" value={ this.state.recipeName } onChange={ this.handleChange} placeholder="Search for recipes"></input>
            <Button variant="outline-success" className="btn-sm" type="submit">Search</Button>
          </Form>
            <a href="/login"><Button className="btn-sm">Login</Button></a>
        </Navbar>
        <Container className={styles.Image}>
          <img src="https://www.pexels.com/photo/board-bunch-cooking-food-349609/" alt="cooking board" />
        </Container>
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