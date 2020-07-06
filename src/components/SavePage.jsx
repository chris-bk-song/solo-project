import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeDetailLoggedin from './RecipeDetail'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Button } from 'react-bootstrap'
import styles from './SavePage.module.css'

class SavePage extends Component {
  render() {
    return(
      <div>
        <Navbar className={styles.NavBarNew} bg="light" expand="lg">
          <Navbar.Brand className={styles.NavLeft} href="/loggedin"><b>Salt & Pepper</b></Navbar.Brand>
          <div className={styles.NavRight}>
            <a href="/loggedin"><Button variant="light" className="btn-sm">Home</Button></a>
          </div>
        </Navbar>
        <Container>
          { this.props.recipes.map((recipe, index) => {
            return (
              <RecipeDetailLoggedin recipe={ recipe } key={ index } />
            )
          })}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(
  mapStateToProps,
  null,
)(SavePage)