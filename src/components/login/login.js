import React, { Component } from 'react';
import CustomButton from '../customButton/customButton.js';
import CustomInput from '../customInput/customInput.js';

class Login extends Component{
    render(){
        return(
            <div className="login">
                <CustomInput label="Texto 1"></CustomInput>
                <CustomInput label="Texto 2"></CustomInput>
                <CustomButton text="Click Me!"></CustomButton>
            </div>
        );
    }
}

export default Login;