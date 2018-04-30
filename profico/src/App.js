import React, { Component } from 'react';
import Homepage from "./Pages/Homepage";
import Questionnaire from "./Pages/Questionnaire";

import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom';


class App extends Component {

    submit=(values) => {
      console.log(values);
    }

    render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/Questionnaire" component={Questionnaire}/>

      </div>
      </Router>
    );
  }
}

export default App;
