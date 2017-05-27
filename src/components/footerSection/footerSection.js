import React, { Component } from 'react';
import './footerSection.css';


class footerSection extends Component {
    render() {
        return (
            <div className="footer"> 
                <div>
                	<p>2015-2016 VECCHIA | todos los derechos reservados</p>
                	<div>
                		<a> Aviso Legal</a>
                		{' '}
                		<a> Politica de Privacidad</a>
                		{' '}
                		<a> Mapa Web</a>
                	</div>
                </div>
            </div>
        )
    }
}

export default footerSection;
