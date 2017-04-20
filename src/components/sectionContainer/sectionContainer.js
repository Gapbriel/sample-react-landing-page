import React, { Component } from 'react';
import './sectionContainer.css';

class SectionContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Click You!"
        }
    }
    render(){
        return (<section></section>)
    }
}

export default SectionContainer;
