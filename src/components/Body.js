import React, { Component } from 'react';
import './Body.css';
import { Carousel } from 'react-responsive-carousel';

class Body extends Component {
  getImage(images) {
    console.log('From here');
    var imagesArr = [];
    images.forEach((image, index) => {
      imagesArr.push(
        <div key={`slider${index}`}>
          <img className="car_img" alt="imgss" src={image} />
        </div>
      );
    });
    return imagesArr;
  }
  render() {
    return (
      <div>
        <div id="body_container">
          <Carousel autoPlay={true} interval={4000} infiniteLoop={true} transitionTime={1000} emulateTouch={true}>
            {this.getImage(this.props.images)}
          </Carousel>
          <div>
            <p className="footer_text_body">{`© ${new Date().getFullYear()} Pictures from my lens. All rights reserved.`}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
