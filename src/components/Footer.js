import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <div className="about_info flexrow">
          <div>About us</div>
          <div>Contact us</div>
        </div> */}
        <div>
          <p className="footer_text">{`© ${new Date().getFullYear()} Pictures from my lens. All rights reserved.`}</p>
        </div>
      </div>
    );
  }
}
export default Footer;
