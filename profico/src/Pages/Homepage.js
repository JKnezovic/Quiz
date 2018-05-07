import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {

  render() {
    return (
      <div className="Homepage">
      <Link to="/Questionnaire"> <button>Start</button></Link>
      <Link to="/Test"> <button>StartTest</button></Link>
      </div>
    );
  }
}

export default Homepage;
