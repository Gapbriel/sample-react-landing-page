import React, { Component } from 'react';
import './App.css';
import NavBarHeader from './components/navBarHeader/navBarHeader.js';


class App extends Component {
  render() {
    return (
      <main className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>*/}
        <NavBarHeader></NavBarHeader>
        <section className="App-content" id="app-content">
          {/*<Login></Login>*/}
        </section>
      </main>
    );
  }
}

export default App;
