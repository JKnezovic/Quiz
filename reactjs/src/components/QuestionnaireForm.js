import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import '../styles/App.css';
import '../styles/radio.css';
import TableComponents from './TableComponents';

const validate = values => {
  const errors = {};
  const questions = ["fav_mov", "fav_jedi", "fav_sith", "fav_planet","force_select"];

  questions.forEach(question => {
    if (!values[question]) {
      errors[question]="flag";
    }
  });

  return errors;
};


class QuestionnaireForm extends Component {
  render() {
    const { handleSubmit, submitting, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
      <table>
      <tbody>

      <TableComponents/>

        </tbody>
        </table>
        <button className="submit" type="submit" disabled={submitting || invalid} >Submit</button>
      </form>
    );
  }
}


QuestionnaireForm = reduxForm({
  form: 'quiz',
validate
})(QuestionnaireForm);

export default QuestionnaireForm;
