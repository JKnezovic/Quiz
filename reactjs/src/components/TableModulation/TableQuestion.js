import React, { Component } from 'react';
class TableQuestion extends Component {

  render() {
    const {nmb, question} = this.props;
    return (
      <tr><th><label>
      <span className="fa-stack">
     <span className="fa fa-circle fa-stack-2x"></span>
     <strong className="fa-stack-1x">
         {nmb +1}
     </strong>
     </span>
      <span className="question">My favourite Sith Lord <br/> <span className="select_one">{question}</span></span></label></th></tr>
    );
  }
}

export default TableQuestion;
