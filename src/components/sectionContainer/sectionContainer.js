import React, { Component } from 'react';
import HomeSection from '../../components/homeSection/homeSection.js';
import DescriptionSection from '../../components/descriptionSection/descriptionSection.js';
import FooterSection from '../../components/footerSection/footerSection.js';
import './sectionContainer.css';


class SectionContainer extends Component {
    render() {
        return (
          <div>
            <HomeSection nextContainerId="quienesSomos" nextTarget="quienesSomosTarget"></HomeSection>
            <DescriptionSection name="quienesSomos" nextContainerId="nuestroEstilo" nextTarget="nuestroEstiloTarget"></DescriptionSection>
            <DescriptionSection name="nuestroEstilo" nextContainerId="galeria" nextTarget="galeriaTarget"></DescriptionSection>
            <DescriptionSection name="galeria"></DescriptionSection>
            <DescriptionSection name="contactate"></DescriptionSection>
            <FooterSection></FooterSection>
          </div>
        )
    }
}

export default SectionContainer;
