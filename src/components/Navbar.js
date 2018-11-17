import React, { Component } from 'react';
import Infobar from './Infobar';
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="flexrow" id="nav_bar">
        <div className="col-lg-2 col-md-6 col-sm-5 col-xs-3 start-lg start-xs header_image">
          <a href="/">
            <img
              alt="wide_logo"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542271669/Social/myImagenesWide.png"
            />
          </a>
          <a href="L">
            <img
              alt="small_logo"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542295436/Social/myImagenes.png"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-5 col-xs-8 end-xs social_icons">
          <a href="https://www.instagram.com/pratap_sharma_/" target="_blank" rel="noopener noreferrer">
            <img
              alt="Insta"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188209/Social/instagram.png"
            />
          </a>
          <a href="https://twitter.com/Pratap2210" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188210/Social/twitter.png"
            />
          </a>
          <a href="https://www.facebook.com/prataps22" target="_blank" rel="noopener noreferrer">
            <img
              alt="Facebook"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188209/Social/facebook.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/prataps22/" target="_blank" rel="noopener noreferrer">
            <img
              alt="Linkedin"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188210/Social/linkedin.png"
            />
          </a>
          <Infobar />
        </div>
      </div>
    );
  }
}
export default Navbar;
