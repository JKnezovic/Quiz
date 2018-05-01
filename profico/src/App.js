import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./Pages/Homepage";
import Questionnaire from "./Pages/Questionnaire";
import Test from './Pages/test';

// We'll create this in step 3.
import store from './store.js';


import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom';


class App extends Component {



    render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/Questionnaire" component={Questionnaire}/>
      <Route exact path="/Test" component={Test}/>
      </div>
      </Router>

    );
  }
}

export default App;