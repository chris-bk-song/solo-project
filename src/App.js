import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Recipe from './components/Recipe';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Recipe} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;