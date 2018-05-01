import React, { Component } from 'react';
import {
  Link
}from 'react-router-dom'

import ContactForm from './ContactForm';


class Test extends Component {

  handleSubmit = (values) => {
   // Do something with the form values
   console.log(values);
 }
  render() {
    return (
      <div className="Test">
      <Link to="/"> <button>Back</button></Link>
      <ContactForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Test;
