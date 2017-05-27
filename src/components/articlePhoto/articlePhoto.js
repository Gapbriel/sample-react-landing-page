import React, { Component } from 'react';
import './articlePhoto.css';


class articlePhoto extends Component {
    render() {
        return (
            <article className={this.props.galleryNumber + " article-photo-container col-md-6"}>
            	<img role="presentation"></img>
            </article>
        )
    }
}

export default articlePhoto;