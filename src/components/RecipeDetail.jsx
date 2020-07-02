import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import styles from './RecipeDetail.module.css'
// import Modal from '@bit/react-bootstrap.react-bootstrap.modal'

class RecipeDetail extends Component {
  state = {data: null}
  componentDidMount(){
    fetch(`https://api.spoonacular.com/recipes/${this.props.recipe.id}/information?apiKey=9a56e86fa19142d4b20afc0d6b7b335c&includeNutrition=true`)
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
          <h5><b>{this.props.recipe.title}</b></h5>
          {/* <h5>{this.props.recipe.id}</h5> */}
          { this.state.data && (
            <span class="text" dangerouslySetInnerHTML={ {__html:this.state.data.summary} }></span> 
          )}
        </div>
        <br></br>
        <a href="/Detail"><Button variant="light">Get Recipe</Button></a>
        {/* <Button>Save!</Button> */}
      </Card>
    )  
  }
}

export default RecipeDetail



// apikeys
// 644cf81819bd45b8a428df385604dc1c
// 67c41709350d4b19bd7705edd26e778a
// 9a56e86fa19142d4b20afc0d6b7b335c
