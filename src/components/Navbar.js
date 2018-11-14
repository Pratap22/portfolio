import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="flexrow" id="nav_bar">
        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 start-lg start-xs header_image">
          <a href="L">
            <img alt="" src="img/Portfolio.png" />
          </a>
        </div>
        <div className="col-lg-7 col-md-7 header_text">
          <h1>
            <strong>Pictures from my lens </strong>
          </h1>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-7 end-xs social_icons">
          <a href="https://www.twitter.com">
            <img alt="Twitter" src="img/twitter.png" />
          </a>
          <a href="https://www.facebook.com">
            <img alt="Facebook" src="img/facebook.png" />
          </a>
          <a href="https://www.linkedin.com">
            <img alt="Linkedin" src="img/linkedin.png" />
          </a>
          <p>
            <strong>Follow us on</strong>
          </p>
        </div>
      </div>
    );
  }
}
export default Navbar;
