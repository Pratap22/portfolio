import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className="footer_text">
        <p>{`© ${new Date().getFullYear()} My Imagenes. All rights reserved.`}</p>
      </div>
    );
  }
}
export default Footer;
