import React, { Component } from 'react';

export default class MainPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <header className="App-header">
        <ol className="List">
          <h1>IDEAS</h1>
          <li><b>Global Warming Awareness App</b>
            <ul>
              <li>Compare weather from past and today</li>
              <li>Retrieve informative data from news and articles</li>
              <li>Login to access posting and commenting feature</li>
              <br></br>
            </ul>
          </li>
  
          <li><b>Food Recipe App</b>
            <ul>
              <li>Retrieve recipes from API</li>
              <li>Retrieve nutrition facts from database</li>
              <li>Save list</li>
              <li>Create your own home recipe and post</li>
              <li>Posting and commenting feature</li>
              <li>Receive likes or dislikes!</li>
              <br></br>
            </ul>
          </li>
  
          <li><b>World History App</b>
            <ul>
              <li>Search and learn world history by selecting years</li>
              <li>Add memory game to learn history</li>
              <li>Select regions for more specific history</li>
              <br></br>
            </ul>
          </li>
  
          {/* <li><b>Prescribed Medication App</b>
            <ul>
              <li>Access GoodRX drug database and access drug info</li>
              <br></br>
            </ul>
          </li> */}
  
          <li><b>Decline App</b>
            <ul>
              <li>Practice how to say NO</li>
            </ul>
          </li>       
        </ol>
      </header>
    )
  }
}

