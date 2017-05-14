import React, { Component } from 'react';
import './nextSectionButton.css'

class NextSectionButton extends Component{
    // constructor(props){
    // 	super(props);
    // }
    render(){
        return (<div className="next-button">
        	<a href={this.props.nextHref}><span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
        	</div>);   
    }
}

export default NextSectionButton;