import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import './flexbogrid.css';

const metaTags = {
  title: 'My Imagenes',
  desc: 'Website for Photographer and Web Developer Pratap Sharma',
  url: 'https://www.myimagenes.me/',
  image: '/logo/myImagenes.png'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>{metaTags.title}</title>
          <meta name="description" content={metaTags.desc} />
          <meta property="og:title" content={metaTags.title} />
          <meta property="og:image" content={metaTags.image} />
          <meta property="og:url" content={metaTags.url} />
        </MetaTags>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
