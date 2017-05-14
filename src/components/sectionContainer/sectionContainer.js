import React, { Component } from 'react';
import HomeSection from '../../components/homeSection/homeSection.js';
import DescriptionSection from '../../components/descriptionSection/descriptionSection.js';
import './sectionContainer.css';


class SectionContainer extends Component {
    render() {
        return (
          <div>
            <HomeSection></HomeSection>
            <DescriptionSection name="quienesSomos"></DescriptionSection>
            <DescriptionSection name="nuestroEstilo"></DescriptionSection>
          </div>
        )
    }
}

export default SectionContainer;
