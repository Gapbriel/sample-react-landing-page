import React, { Component } from 'react';
import NavBarHeader from '../../components/navBarHeader/navBarHeader.js';
import ArticleHome from '../../components/articleHome/articleHome.js';
import logo from '../../images/logo.png';
import './homeSection.css';


class homeSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Click You!",
            name: "home"
        }
    }
    render() {
        // return (<NextSectionButton nextHref={'#' + this.props.name}></NextSectionButton>)
        return (
          <section id={this.state.name} name={this.state.name} className={ this.state.name }> 
            <img src={logo} role="presentation" className="img-logo img-responsive hidden-xs"></img>
            <NavBarHeader></NavBarHeader>
            <ArticleHome nextTarget={this.props.nextTarget}></ArticleHome>
          </section>
        );
    }
}

export default homeSection;