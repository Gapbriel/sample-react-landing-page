import React, { Component } from 'react';
import './articleHome.css';

class ArticleHome extends Component{
    constructor(){
        super();
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
                
               </article>)    
            
    }
}

export default ArticleHome;