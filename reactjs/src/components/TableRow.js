import React, { Component } from 'react';
import '../styles/modal.css'
import { Field } from 'redux-form';
import '../styles/radio.css'
class TableRow extends Component {


  render() {
      const { input_name, value, label } = this.props;
    return (
      <tr><td><label className="container" ><Field name={input_name} component="input" type="radio" value={value}/>{label}<span className="checkmark"></span></label></td></tr>
    );
  }
}

export default TableRow;
