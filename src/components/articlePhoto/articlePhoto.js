import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import './articlePhoto.css';


class articlePhoto extends Component {

  	constructor(props) {
		super(props);
		this.state = {showModal: false};
	}
	close = () => {
		this.setState({ showModal: false });
	}

	open = () => {
		this.setState({ showModal: true });
	}
    render() {
        return (
	            <article onClick={this.open} className={this.props.galleryNumber + " article-photo-container col-md-6"}>
	            	<img role="presentation"></img>
					<Modal show={this.state.showModal} onHide={this.close}>
						<Modal.Header closeButton>
						</Modal.Header>
						<Modal.Body closeButton>
							<article className={this.props.galleryNumber + " article-photo-container"}>
	            				<img role="presentation"></img>
	            		    </article>							
						</Modal.Body>
					</Modal>
	            </article>
        )
    }
}

export default articlePhoto;