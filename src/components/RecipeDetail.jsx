import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Accordion } from 'react-bootstrap'
import styles from './RecipeDetail.module.css'
import { connect } from 'react-redux';
import { saveRecipe } from './redux/actions/action'

class RecipeDetail extends Component {
  state = {data: null}
  componentDidMount(){
    fetch(`https://api.spoonacular.com/recipes/${this.props.recipe.id}/information?apiKey=cdbc56563e5e4b63822789c78ea57883&includeNutrition=true`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data
      })
    })
  }
  
  render(){
    return (
      <Accordion>
        <Card className={styles.Card}>
          <img src={this.props.recipe.image} alt=""/>
          <h5><b>{this.props.recipe.title}</b></h5>
          <br></br>
          
          <Accordion.Toggle as={Button} variant="light" eventKey="0">View Summary</Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div>
            { this.state.data && (
              <span class="text" dangerouslySetInnerHTML={ {__html:this.state.data.summary} }></span> 
            )}
            </div>
          </Accordion.Collapse>
          
          <Accordion.Toggle as={Button} variant="secondary" eventKey="1">View Recipe</Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <ol>
              { this.state.data && this.state.data.analyzedInstructions && this.state.data.analyzedInstructions.length && this.state.data.analyzedInstructions[0].steps.map(instruction => (
                <li class="text" dangerouslySetInnerHTML={ {__html:instruction.step} }></li> 
              ))}
            </ol>
          </Accordion.Collapse>

        </Card>
      </Accordion>
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
)(RecipeDetail)
