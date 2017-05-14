import React, { Component } from 'react';
import './articleDescription.css';


class articleDescription extends Component {
    render() {
        return (
            <article className={this.props.typeDescription.name +' col-md-5 text-left'} > 
                <h1>{this.props.typeDescription.title}</h1>
                <p dangerouslySetInnerHTML={{__html: this.props.typeDescription.content}}></p>
            </article>
        )
    }
}

export default articleDescription;
