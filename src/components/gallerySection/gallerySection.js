import React, { Component } from 'react';
import ArticlePhoto from '../../components/articlePhoto/articlePhoto.js'
import './gallerySection.css';


class gallerySection extends Component {
    render() {
        return (
            <div className="gallery-container col-md-6">
            	<ArticlePhoto galleryNumber="gallery_1"></ArticlePhoto>
            	<ArticlePhoto galleryNumber="gallery_2"></ArticlePhoto>
            	<ArticlePhoto galleryNumber="gallery_3"></ArticlePhoto>
            	<ArticlePhoto galleryNumber="gallery_4"></ArticlePhoto>
            	<ArticlePhoto galleryNumber="gallery_5"></ArticlePhoto>
            	<ArticlePhoto galleryNumber="gallery_6"></ArticlePhoto>
            </div>
        )
    }
}

export default gallerySection;