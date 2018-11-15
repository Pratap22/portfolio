import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="flexrow" id="nav_bar">
        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 start-lg start-xs header_image">
          <a href="L">
            <img
              alt="wide_logo"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542271669/Social/myImagenesWide.png"
            />
          </a>
          <a href="L">
            <img
              alt="small_logo"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542271669/Social/myImagenes.png"
            />
          </a>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-7 end-xs social_icons">
          <a href="https://twitter.com/Pratap2210">
            <img
              alt="Twitter"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188210/Social/twitter.png"
            />
          </a>
          <a href="https://www.facebook.com/prataps22">
            <img
              alt="Facebook"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188209/Social/facebook.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/prataps22/">
            <img
              alt="Linkedin"
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542188210/Social/linkedin.png"
            />
          </a>
          <div className="flexrow end-xs information">
            <div>
              <a href="/about">About</a>
            </div>
            <div>
              <a href="/contact">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
