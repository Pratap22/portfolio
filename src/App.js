import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import './flexbogrid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
