import React, { Component } from 'react';
import './SlideShow.css';

class SlideShowModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      autoplay: this.props.autoplay
    };
  }

  getImage = () => {
    var images = this.props.sliderImage;
    return <img className="slider-image" alt="sliderImage" src={images[this.state.slideIndex]} />;
  };
  goToPrevious = () => {
    if (this.state.slideIndex === 0) {
      this.setState({
        slideIndex: this.props.sliderImage.length - 1
      });
    }
    if (this.state.slideIndex > 0) {
      this.setState({
        slideIndex: this.state.slideIndex - 1
      });
    }
  };

  goToNext = () => {
    var images = this.props.sliderImage;
    if (this.state.slideIndex === images.length - 1) {
      this.setState({
        slideIndex: 0
      });
    }
    if (this.state.slideIndex < images.length - 1) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    }
  };

  // Setting onClick function for dots
  dotSelection = n => {
    this.setState({
      slideIndex: n
    });
  };

  // Setting no. of dots for number of images
  getDots() {
    const images = this.props.sliderImage.length;
    var dotsArray = [];
    for (var i = 0; i < images; i++) {
      dotsArray.push(
        <i className="circle icon selection-dots" key={`dots-${i}`} onClick={this.dotSelection.bind(this, i)} />
      );
    }
    return dotsArray;
  }

  componentDidMount() {
    if (this.state.autoplay) {
      setInterval(this.goToNext, 3000);
    }
  }

  render() {
    return (
      <div id="slider_model">
        {this.getImage()}
        <div className="arrow">
          <i className="angle left icon arrow-direction" onClick={this.goToPrevious} />
          <i className="angle right icon arrow-direction" onClick={this.goToNext} />
        </div>
        {this.props.showDots ? <div className="dots">{this.getDots()}</div> : null}
      </div>
    );
  }
}

export default SlideShowModel;
