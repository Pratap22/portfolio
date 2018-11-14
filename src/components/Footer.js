import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div>
        <p className="footer_text">{`© ${new Date().getFullYear()} Pictures from my lens. All rights reserved.`}</p>
      </div>
    );
  }
}
export default Footer;
