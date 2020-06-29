import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;