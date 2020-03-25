import React from 'react';
import './App.css';
import TodoApp from './todo-app';
import RegisterPage from './register-page.js';
import User from './user.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let currentUser = {},
    assignUser = (user)=>{
      currentUser.data = user;
  };
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/register"><RegisterPage/></Route>
            <Route path="/user"><User user = {currentUser}/></Route>
            <Route path="/"><TodoApp assignUser={assignUser}/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
