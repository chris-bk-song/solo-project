import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Button } from 'react-bootstrap'
import styles from './RecipeDetail.module.css'

class RecipeDetail extends Component {
  state = {data: null}
  componentDidMount(){
    fetch(`https://api.spoonacular.com/recipes/${this.props.recipe.id}/information?apiKey=67c41709350d4b19bd7705edd26e778a&includeNutrition=true`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data
      })
    })
  }
  

  render(){
    return (
      <Container className={styles.Container}>
        <Card className={styles.Card}>
          <img src={this.props.recipe.image} alt=""/>
          <div>
            <h5>{this.props.recipe.title}</h5>
            {/* <h5>{this.props.recipe.id}</h5> */}
            { this.state.data && (
              <div>{ this.state.data.instructions }</div> 
            )}
          </div>
          <a href="/Detail"><Button>Detail</Button></a>
          <Button>Save!</Button>
        </Card>
      </Container>
    )  
  }
}

export default RecipeDetail