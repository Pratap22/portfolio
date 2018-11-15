import React, { Component } from 'react';
import './Body.css';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { fetchImages } from '../actions';
import { getIsLoading, getImages } from '../reducers/dataReducer';
import ReactLoading from 'react-loading';

class Body extends Component {
  componentDidMount() {
    //fetch images from firebase
    this.props.fetchImages();
  }
  getImage(images) {
    var imagesArr = [];
    images.forEach((image, index) => {
      imagesArr.push(
        <div key={`slider${index}`}>
          <img className="car_img" alt="imgss" src={image} />
          <p className="legend">© My Imagenes</p>
        </div>
      );
    });
    return imagesArr;
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={'spin'} color="#4869bd" height={80} width={80} />
        </div>
      );
    }
    return (
      <div>
        <div id="body_container">
          <Carousel autoPlay={true} interval={4000} infiniteLoop={true} transitionTime={1000} emulateTouch={true}>
            {this.getImage(this.props.images)}
          </Carousel>
          <div>
            <p className="footer_text_body">{`© ${new Date().getFullYear()} My Imagenes. All rights reserved.`}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: getIsLoading(state),
    images: getImages(state)
  };
};

const connectedBody = connect(
  mapStateToProps,
  { fetchImages }
)(Body);

export default connectedBody;
