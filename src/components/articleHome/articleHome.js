import React, { Component } from 'react';
import NextSectionButton from '../../components/nextSectionButton/nextSectionButton.js';
import './articleHome.css';

class ArticleHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'VECCHIA',
            descrip: 'Barbería y peluquería unisex',
            text:'"Tenemos historia y tenemos estilo"'
        }
    }
    render(){
        return (<article className="home-article" > 
                <h1>{this.state.title}</h1>
                <h3>{this.state.descrip}</h3>
                <h2><em>{this.state.text}</em></h2>
                <NextSectionButton nextHref={this.props.nextTarget}></NextSectionButton>
               </article>)    
            
    }
}

export default ArticleHome;