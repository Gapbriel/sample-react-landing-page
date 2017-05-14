import React, { Component } from 'react';
import NextSectionButton from '../../components/nextSectionButton/nextSectionButton.js';
import ArticleDescription from '../../components/articleDescription/articleDescription.js';
import './descriptionSection.css';


class descriptionSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quienesSomos: {
                name:"articleQuienesSomos",
                title: "Quiénes Somos",
                content: "<strong>Somos lo nuevo. Somos innovación. Somos vanguardia</strong>. Queremos que nos visites y sientas que es un antes y un después. Estamos en Palermo. <strong>Nos define la frescura, la espontaneidad, las ganas de innovar</strong>. También la calidad humana de nuestro staff, en armonía con el concepto vanguardista de nuestra peluquería. <strong>Nuestros servicios incluyen cortes, peinados, afeitado, coloraciones, tratamientos, lavados, baños de crema y maquillaje</strong>"
            },
            nuestroEstilo: {
                name:"articleNuestroArticulo",
                title: "Nuestro Estilo",
                content: "En nuestro salón <strong>tú eres protagonista</strong>. Se trata de descubrir tus posibilidades, <strong>sacar a relucir tu personalidad</strong>. Exploramos las últimas tendencias, <strong>buscamos el look ideal</strong> para cada persona. <strong>En Vecchia podrás encontrar lo que necesitas para verte especial</strong>. Nuestro compromiso es con la moda y con nuestros clientes. <strong>Porque nuestro estilo es buscar y encontrar tu propio estilo</strong>.<br>"
            }
        }
    }
    render() {
        // return (<NextSectionButton nextHref={'#' + this.props.name}></NextSectionButton>)
        if (this.props.name === "quienesSomos") {
            return (
                <section name={this.props.name} className={ this.props.name}>
                    <div className="articleDescription-container">
                        <ArticleDescription typeDescription={this.state.quienesSomos}></ArticleDescription>
                    </div>
                    <NextSectionButton></NextSectionButton>
                </section>
            )
        } else {
            return (
                <section name={this.props.name} className={ this.props.name }>
                    <div className="articleDescription-container">
                        <ArticleDescription typeDescription={this.state.nuestroEstilo}></ArticleDescription> 
                     </div>   
                    <NextSectionButton></NextSectionButton>
                </section>
            )
        }

    }
}

export default descriptionSection;
