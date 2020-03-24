import React from 'react';
import './register-page.css';
const RegisterPage = ()=>{
    return (
        <div className="register-page-container">
            <div className="sub-container">
                <label id="username">Username</label>
                <input type="text"/>
            </div>
            <div className="sub-container">
                <label id="password">Password</label>
                <input type="text"/>
            </div>
            <div className="sub-container">
                <button id="sign-in">
                    SIGN IN
                </button>
            </div>
        </div>
    );
}
export default RegisterPage;