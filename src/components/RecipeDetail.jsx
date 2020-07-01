import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import styles from './RecipeDetail.module.css'

class RecipeDetail extends Component {
  state = {data: null}
  componentDidMount(){
    fetch(`https://api.spoonacular.com/recipes/${this.props.recipe.id}/information?apiKey=644cf81819bd45b8a428df385604dc1c&includeNutrition=true`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data
      })
    })
  }
  

  render(){
    return (
      <Card className={styles.Card}>
        <img src={this.props.recipe.image} alt=""/>
        <div>
          <h5>{this.props.recipe.title}</h5>
          <h5>{this.props.recipe.id}</h5>
          { this.state.data && (
            <div>{ this.state.data.creditsText }</div> 
          )}
        </div>
      </Card>
    )  
  }
}

export default RecipeDetail