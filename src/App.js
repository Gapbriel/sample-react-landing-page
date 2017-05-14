import React, { Component } from 'react';
import './App.css';
import SectionContainer from './components/sectionContainer/sectionContainer.js';


class App extends Component {
  render() {
    return (
      <main className="App">
        <SectionContainer name="home"></SectionContainer>
      </main>
    );
  }
}

export default App;
