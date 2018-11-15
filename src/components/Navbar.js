import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { getInfo } from '../reducers/dataReducer';
import './Navbar.css';
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal1: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    this.props.fetchData();
  }
  handleCloseModal(string) {
    console.log(string);
    if (string === 'about') {
      this.setState({ showModal: false });
    }
    if (string === 'contact') {
      this.setState({ showModal1: false });
    }
  }
  handleOpenModal(string) {
    console.log(string);
    if (string === 'about') {
      this.setState({ showModal: true });
    }
    if (string === 'contact') {
      this.setState({ showModal1: true });
    }
  }

  render() {
    console.log(this.props.information.contact);
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
              src="https://res.cloudinary.com/pratap2210/image/upload/v1542295436/Social/myImagenes.png"
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
              <span onClick={this.handleOpenModal.bind(this, 'about')}>About us</span>
              <ReactModal
                id="about_modal"
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal.bind(this, 'about')}
              >
                <div>{this.props.information.about}</div>
                <button onClick={this.handleCloseModal.bind(this, 'about')}>Close Modal</button>
              </ReactModal>
            </div>
            <div>
              <span onClick={this.handleOpenModal.bind(this, 'contact')}>Contact us</span>
              <ReactModal isOpen={this.state.showModal1} onRequestClose={this.handleCloseModal.bind(this, 'contact')}>
                <div>
                  {/* <div>Address: {this.props.information.contact.add}</div>
                  <div>Contact No.: {this.props.information.contact.phone}</div>
                  <div>Email: {this.props.information.contact.email}</div> */}
                </div>
                <button onClick={this.handleCloseModal.bind(this, 'contact')}>Close Modal</button>
              </ReactModal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactModal.setAppElement('#root');
const mapStateToProps = state => {
  return {
    information: getInfo(state)
  };
};

const connectedNavbar = connect(
  mapStateToProps,
  { fetchData }
)(Navbar);

export default connectedNavbar;
