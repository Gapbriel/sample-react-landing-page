import React, { Component } from 'react';
import './customButton.css';

class CustomButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Click You!"
        }
    }
    render(){
        return <button className="buttonCustom">{this.props.text}</button>    
    }
}

export default CustomButton;
