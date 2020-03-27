import React from 'react';
import './register.css';

const Register = (props)=>{
    let handleClick = function(){
        props.history.push('./register');
    }
    return (
        <div className="register-container">
            <div onClick={handleClick} className="register-button">  
                 REGISTER
            </div>
        </div>
    )
}
export default Register;