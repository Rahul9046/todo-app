import React from 'react';
import './todo-app.css';
import Login from './login.js';
import Register from './register.js';
import { withRouter } from 'react-router-dom';

const TodoApp = (props)=>{
    return (
        <div className="main-container">
            <Login  assignUser={props.assignUser} history={props.history}/>
            <Register history={props.history}/>
        </div>
    );
}
export default withRouter(TodoApp);