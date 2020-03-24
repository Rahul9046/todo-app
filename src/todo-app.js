import React from 'react';
import './todo-app.css';
import Login from './login.js';
import Register from './register.js';

const TodoApp = ()=>{
    return (
        <div className="main-container">
            <Login />
            <Register />
        </div>
    );
}
export default TodoApp;