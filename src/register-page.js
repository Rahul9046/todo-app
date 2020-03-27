import React from 'react';
import './register-page.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const RegisterPage = (props)=>{
    let handleRegistration = ()=>{
        let username = document.getElementById('username').value,
            password = document.getElementById('password').value;
        axios.post('/.netlify/functions/api/user', {
            details: {
                username,
                password
            }
        });
        props.history.push('/');
    }
    return (
        <div className="register-page-container">
            <div className="sub-container">
                <label>Username</label>
                <input id="username" type="text"/>
            </div>
            <div className="sub-container">
                <label>Password</label>
                <input id="password" type="text"/>
            </div>
            <div className="sub-container">
                <button onClick={handleRegistration} id="sign-in">
                    SIGN IN
                </button>
            </div>
        </div>
    );
}
export default withRouter(RegisterPage);