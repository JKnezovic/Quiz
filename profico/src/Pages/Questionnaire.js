import React, { Component } from 'react';


class Questionnaire extends Component {

  render() {
    return (
      <div className="Questionnaire">
      <p>{this.props.Questions.question}</p>

      </div>
    );
  }
}

export default Questionnaire;
