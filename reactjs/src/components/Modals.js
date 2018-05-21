import React, { Component } from 'react';
import '../styles/modal.css'
class Modal extends Component {

  render() {
    return (
      <div className="Modal">
      {this.props.children}
      </div>
    );
  }
}

export default Modal;
