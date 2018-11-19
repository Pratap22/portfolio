import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import './flexbogrid.css';

const metaTags = {
  title: 'My Imagenes',
  desc: 'Website for Photographer and Web Developer Pratap Sharma',
  //url: 'https://www.myimagenes.me/',
  url: 'http://localhost:3000/',
  image: '/logo/myImagenes.png'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          title={metaTags.title}
          meta={[
            { name: 'description', content: metaTags.desc },
            { property: 'og:description', content: metaTags.desc },
            { property: 'og:title', content: metaTags.title },
            { property: 'og:url', content: metaTags.url },
            { property: 'og:image', content: metaTags.image },
            { itemprop: 'name', content: metaTags.title },
            { itemprop: 'description', content: metaTags.desc },
            { itemprop: 'image', content: metaTags.image }
          ]}
        />
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
