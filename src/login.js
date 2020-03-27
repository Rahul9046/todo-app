import React from 'react';
import './login.css';
import axios from 'axios';

const Login = (props)=>{
    let handleClick = (e)=>{
        let username = document.getElementById('username').value,
        password = document.getElementById('password').value;
        axios.get('/.netlify/functions/api/user/', { params: { usr: username, pass: password}}).then(function(json){
            props.assignUser(json.data);
            props.history.push('./user');
        });
    }
    return (
        <div className="login-in-container">
            <div className="sub-container">
                <label>Username</label>
                <input id="username" type="text"/>
            </div>
            <div className="sub-container">
                <label>Password</label>
                <input id="password" type="text"/>
            </div>
            <div className="sub-container">
                <button id="login" onClick={handleClick}>
                    LOGIN
                </button>
            </div>
        </div>
    );
}
export default Login;