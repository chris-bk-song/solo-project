import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import styles from './MainPage.module.css'

function MainPage(props) {
  return (
    <Card className={styles.Card}>
      <img src={props.recipe.image} alt=""/>
      <div>
        <h5>{props.recipe.title}</h5>
        <h5>{props.recipe.id}</h5>
      </div>
    </Card>
  )  
}

export default MainPage