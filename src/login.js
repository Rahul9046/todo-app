import React from 'react';
import './login.css';

function handleClick(e){
    let username = document.getElementById('username').value,
    password = document.getElementById('password').value;
    fetch('/api/user/?usr=' + username + '&pass=' + password).then(function(data){
        return data.json();
    }).then((json)=>{
        console.log(json);
    });
}
const Login = ()=>{
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