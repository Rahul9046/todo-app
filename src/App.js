import React from 'react';
import './App.css';
import TodoApp from './todo-app';
import RegisterPage from './register-page.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/register"><RegisterPage/></Route>
            <Route path="/"><TodoApp/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
