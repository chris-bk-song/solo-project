import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Modal } from 'react-bootstrap'
import styles from './RecipeDetail.module.css'
import { connect } from 'react-redux';
import { saveRecipe } from './redux/actions/action'

// import Modal from '@bit/react-bootstrap.react-bootstrap.modal'

class RecipeDetailLoggedin extends Component {
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
      <Card className={styles.Card}>
        <img src={this.props.recipe.image} alt=""/>
        <div>
          <h5><b>{this.props.recipe.title}</b></h5>
          { this.state.data && (
            <span class="text" className="overflow-hidden" style={{ maxWidth: "100px" }} dangerouslySetInnerHTML={ {__html:this.state.data.summary} }></span> 
          )}
        </div>
        <br></br>
        <a href="/RecipePage"><Button variant="light">View Recipe</Button></a>
        <Button className={styles.SaveButton} variant="dark" onClick={() => {this.props.saveRecipe(this.props.recipe)}}>Save Recipe</Button>
      </Card>
    )  
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

const mapDispatchToProps = {
  saveRecipe,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeDetailLoggedin)