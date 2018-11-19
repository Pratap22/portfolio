import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { fetchInfo } from '../actions';
import { getInfo, getIsLoading } from '../reducers/infoReducer';
import nl2br from 'react-newline-to-break';
import './Navbar.css';
class Infobar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal1: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  getInformation() {
    this.props.fetchInfo();
  }
  handleCloseModal(string) {
    if (string === 'about') {
      this.setState({ showModal: false });
    }
    if (string === 'contact') {
      this.setState({ showModal1: false });
    }
  }
  handleOpenModal(string) {
    this.getInformation();
    if (string === 'about') {
      this.setState({ showModal: true });
    }
    if (string === 'contact') {
      this.setState({ showModal1: true });
    }
  }
  render() {
    if (this.props.isLoading) {
      return (
        <div className="flexrow end-xs loading_info">
          <div>
            <span>About me </span>
          </div>
          <div>|</div>
          <div>
            <span>Contact me</span>
          </div>
        </div>
      );
    }
    return (
      <div className="flexrow end-xs information">
        <div>
          <span onClick={this.handleOpenModal.bind(this, 'about')}>About me</span>
          <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal.bind(this, 'about')}>
            <h4 className="author_info_head">About the Author:</h4>
            <div className="author_info">
              <div>
                Hello, I'm <strong>Pratap Sharma</strong>
              </div>
              <div>{`A ${new Date().getFullYear() - 1995} years-old Photographer`}</div>
            </div>
            <div className="about_modal">{this.props.information.about}</div>
            <button className="close_button" onClick={this.handleCloseModal.bind(this, 'about')}>
              Close
            </button>
          </ReactModal>
        </div>
        <div>|</div>
        <div>
          <span onClick={this.handleOpenModal.bind(this, 'contact')}>Contact me</span>
          <ReactModal isOpen={this.state.showModal1} onRequestClose={this.handleCloseModal.bind(this, 'contact')}>
            <div className="info_modal">
              <img
                alt="logo"
                src="https://res.cloudinary.com/pratap2210/image/upload/v1542271669/Social/myImagenesWide.png"
              />
              <h4>
                Contact: <strong>Pratap Sharma</strong>{' '}
              </h4>
              <div>
                <strong>Address: </strong>
                {nl2br(this.props.information.add)}
              </div>
              <div>
                <strong>Contact No.: </strong>
                <a href="whatsapp://send?text=Hi Pratap!&phone=+919774374913">{this.props.information.phone}</a>{' '}
                (Whatsapp/Call)
              </div>
              <div>
                <strong>Email: </strong>
                <a href="mailto:sharma.pratap22@gmail.com" target="_top">
                  {' '}
                  {this.props.information.email}{' '}
                </a>
              </div>
            </div>
            <button className="close_button" onClick={this.handleCloseModal.bind(this, 'contact')}>
              Close
            </button>
          </ReactModal>
        </div>
      </div>
    );
  }
}
ReactModal.setAppElement('#root');

const mapStateToProps = state => {
  return {
    isLoading: getIsLoading(state),
    information: getInfo(state)
  };
};

const connectedInfobar = connect(
  mapStateToProps,
  { fetchInfo }
)(Infobar);

export default connectedInfobar;
