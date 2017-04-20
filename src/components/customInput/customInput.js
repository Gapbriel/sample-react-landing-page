import React, { Component } from 'react';

class CustomInput extends Component{
    render(){
        return <input value={this.props.text}></input>    
    }
}

export default CustomInput;


