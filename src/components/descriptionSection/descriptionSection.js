import React, { Component } from 'react';
import Scroll from 'react-scroll'
import NextSectionButton from '../../components/nextSectionButton/nextSectionButton.js';
import ArticleDescription from '../../components/articleDescription/articleDescription.js';
import GallerySection from '../../components/gallerySection/gallerySection.js';
import FormContacto from '../../components/formContacto/formContacto.js';
import './descriptionSection.css';

const Element    = Scroll.Element;
class descriptionSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quienesSomos: {
                name: "articleQuienesSomos",
                title: "Quiénes Somos",
                content: "<strong>Somos lo nuevo. Somos innovación. Somos vanguardia</strong>. Queremos que nos visites y sientas que es un antes y un después. Estamos en Palermo. <strong>Nos define la frescura, la espontaneidad, las ganas de innovar</strong>. También la calidad humana de nuestro staff, en armonía con el concepto vanguardista de nuestra peluquería. <strong>Nuestros servicios incluyen cortes, peinados, afeitado, coloraciones, tratamientos, lavados, baños de crema y maquillaje</strong>"
            },
            nuestroEstilo: {
                name: "articleNuestroArticulo",
                title: "Nuestro Estilo",
                content: "En nuestro salón <strong>tú eres protagonista</strong>. Se trata de descubrir tus posibilidades, <strong>sacar a relucir tu personalidad</strong>. Exploramos las últimas tendencias, <strong>buscamos el look ideal</strong> para cada persona. <strong>En Vecchia podrás encontrar lo que necesitas para verte especial</strong>. Nuestro compromiso es con la moda y con nuestros clientes. <strong>Porque nuestro estilo es buscar y encontrar tu propio estilo</strong>.<br>"
            },
            'galeria': {
                name: "articleHeaderGaleria",
                title: "Galeria",
                content: "Te invitamos a conocer lo que hacemos cada día con pasión y dedicación, Empeza a descubrir Vecchia, empezá a formar parte de lo nuevo en peluquería y estética."
            },
            'contactate': {
                name: "articleHeadercontactate",
                title: "contactate",
                content:"¿te gustaría reservar un turno con nosotros? ¿tenés consultas para hacernos? Completá este formulario y te responderemos a la Brevedad"
            }
        }
    }
    render() {
        let description;
        switch (this.props.name) {
            case 'quienesSomos':
                description = (
                    <div className="description-flex-container"> 
                        <div className="articleDescription-container">
                            <ArticleDescription typeDescription={this.state.quienesSomos}></ArticleDescription>
                        </div>
                        <NextSectionButton nextHref={this.props.nextTarget}></NextSectionButton>
                    </div>
                );
                break;
            case 'nuestroEstilo':
                description = (
                    <div className="description-flex-container">
                        <div className="articleDescription-container">
                            <ArticleDescription typeDescription={this.state.nuestroEstilo}></ArticleDescription> 
                         </div>   
                        <NextSectionButton nextHref={this.props.nextTarget}></NextSectionButton>
                    </div>
                );
                break;
            case 'galeria':
                description= (
                    <div className="header-flex-container">
                            <ArticleDescription typeDescription={this.state.galeria}></ArticleDescription>
                            <GallerySection></GallerySection>  
                    </div>
                )
                break;
              case 'contactate':
                description= (
                    <div className="header-flex-container">
                            <ArticleDescription typeDescription={this.state.contactate}></ArticleDescription>
                            <FormContacto></FormContacto> 
                    </div>
                )
                break;
              default:
                break;  
        }
        return <section id={this.props.name}  name={this.props.name} className={ this.props.name}>
                            <Element name={this.props.name + "Target"}></Element>
                            {description}
                        </section>;
    }
}

export default descriptionSection;
