import React, { Component } from 'react';
import {
  Link
}from 'react-router-dom'

class Homepage extends Component {

  render() {
    return (
      <div className="Homepage">
      <Link to="/Pages/Questionnaire"> <button>Start</button></Link>
    <Link to="/Pages/Homepage"> <button>Nazad</button></Link>
      </div>
    );
  }
}

export default Homepage;
