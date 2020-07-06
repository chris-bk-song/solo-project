import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeDetail from './RecipeDetail'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Form, Container, Button } from 'react-bootstrap'
import styles from './SavePage.module.css'

class SavePage extends Component {
  render() {
    return(
      <div>
        <Navbar className={styles.NavBarNew} bg="light" expand="lg">
          <Navbar.Brand className={styles.NavLeft} href="/"><b>Salt & Pepper</b></Navbar.Brand>
          <div className={styles.NavRight}>
            <a href="/"><Button variant="light" className="btn-sm">Home</Button></a>
            <a href="/signup"><Button variant="light" className="btn-sm">Sign up</Button></a>
          </div>
        </Navbar>
        <Container>
          { this.props.recipes.map((recipe, index) => {
            return (
              <RecipeDetail recipe={ recipe } key={ index } />
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