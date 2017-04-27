import React, { Component } from 'react';
import './App.css';
import SectionContainer from './components/sectionContainer/sectionContainer.js';


class App extends Component {
  render() {
    return (
      <main className="App">
        <SectionContainer name="home"></SectionContainer>
        <SectionContainer name="quienesSomos"></SectionContainer>
        <SectionContainer name="nuestroEstilo"></SectionContainer>
        <SectionContainer name="galeria"></SectionContainer>
        <SectionContainer name="contactate"></SectionContainer>
      </main>
    );
  }
}

export default App;
