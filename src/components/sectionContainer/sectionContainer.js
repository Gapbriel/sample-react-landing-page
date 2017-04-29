import React, { Component } from 'react';
import NavBarHeader from '../../components/navBarHeader/navBarHeader.js';
import ArticleHome from '../../components/articleHome/articleHome.js';
import './sectionContainer.css';
import logo from '../../images/logo.png';


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
              <img src={logo} className="img-logo img-responsive hidden-xs"></img>
              <NavBarHeader></NavBarHeader>
              <ArticleHome></ArticleHome>
           </section>)
        }else{
           return (<section  className={this.props.name}>
               <a name={this.props.name}> </a> 
                </section>)
        }    
    }
}

export default SectionContainer;
