import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import './flexbogrid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Imagenes</title>
          <link rel="canonical" href="https://www.myimagens.me" />
          <meta name="description" content="A portfolio for Pratap Sharma" />
        </Helmet>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
