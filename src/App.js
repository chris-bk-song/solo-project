import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Recipe from './components/Recipe';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SavePage from './components/SavePage';
import LoggedinPage from './components/LoggedinPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Recipe} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/savelist" exact component={SavePage} />
          <Route path="/loggedin" exact component={LoggedinPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;