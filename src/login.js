import React from 'react';
import './login.css';

const Login = ()=>{
    return (
        <div className="login-in-container">
            <div className="sub-container">
                <label id="username">Username</label>
                <input type="text"/>
            </div>
            <div className="sub-container">
                <label id="password">Password</label>
                <input type="text"/>
            </div>
            <div className="sub-container">
                <button id="login">
                    LOGIN
                </button>
            </div>
        </div>
    );
}
export default Login;