import React, { Component } from 'react';
import { Field } from 'redux-form';
class TableRow extends Component {

  render() {
        const {input_name, label, value} = this.props;
    return (
      <tr><td><label className="container" ><Field name={input_name} component="input" type="radio" value={value}/> {label}<span className="checkmark"></span></label></td></tr>
    );
  }
}

export default TableRow;
