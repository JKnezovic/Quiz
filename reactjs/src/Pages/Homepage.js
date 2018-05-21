import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css'
import '../styles/homestyle.css'

class Homepage extends Component {

  render() {
    return (
      <div className="Homepage">
      <h1>May the force<br /> be with you</h1>
      <Link to="/Questionnaire"> <button>START</button></Link>
      </div>
    );
  }
}

export default Homepage;
