import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './nextSectionButton.css';

const scroll = Scroll.scroller;
class NextSectionButton extends Component {

    constructor(props) {
        super(props);
        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo() {
        //scroll.scrollTo();
        scroll.scrollTo(this.props.nextHref, {
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint"
        });
    }
    render() {
        return (<div className="next-button">       		
        	<a onClick={this.scrollTo}>
        		<span className="glyphicon glyphicon-menu-down" aria-hidden="true">
        		</span>
        	</a>
        	</div>);
    }
}

export default NextSectionButton;
