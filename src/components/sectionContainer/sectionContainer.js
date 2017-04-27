import React, { Component } from 'react';
import NavBarHeader from '../../components/navBarHeader/navBarHeader.js';
import './sectionContainer.css';

class SectionContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Click You!"
        }
    }
    render(){
         if (this.props.name === "home") {
           return (<section name={this.props.name} className={this.props.name}>
              <NavBarHeader></NavBarHeader>
           </section>)
        }else{
           return (<section  className={this.props.name}>
               <a name={this.props.name}> </a> 
                </section>)
        }    
    }
}

export default SectionContainer;
