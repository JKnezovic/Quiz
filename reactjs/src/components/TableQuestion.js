import React, { Component } from 'react';
import '../styles/modal.css'
import '../styles/radio.css'
class TableRow extends Component {


  render() {
      const { nmb, question } = this.props;
    return (
      <tr><th><label>
      <span className="fa-stack">
     <span className="fa fa-circle fa-stack-2x"></span>
     <strong className="fa-stack-1x">
         {nmb+1}
     </strong>
     </span>
      <span className="question">{question} <br/> <span className="select_one"> Select one </span></span></label></th></tr>
    );
  }
}

export default TableRow;
