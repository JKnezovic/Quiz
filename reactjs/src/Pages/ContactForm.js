import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/App.css';
import '../styles/radio.css'

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


class ContactForm extends Component {
  render() {
    const { handleSubmit, submitting, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
      <table>
      <tbody>

        <tr><th>
        <label>
          <span className="fa-stack">
          <span className="fa fa-circle fa-stack-2x"></span>
          <strong className="fa-stack-1x"> 1 </strong>
          </span>
          <span className="question">My favourite SW movie <br/> <span className="select_one"> Select one </span>
          </span>
        </label>
        </th></tr>

          <tr><td className="first"><label className="container" ><Field name="fav_mov" component="input" type="radio" value="0"/> The Phantom Menace<span className="checkmark"></span></label></td></tr>
          <tr><td><label className="container" ><Field name="fav_mov" component="input" type="radio" value="1"/> Attack of the clones<span className="checkmark"></span></label></td></tr>
          <tr><td><label className="container" ><Field name="fav_mov" component="input" type="radio" value="2"/> Revenge of the Sith<span className="checkmark"></span> </label></td></tr>
          <tr><td><label className="container" ><Field name="fav_mov" component="input" type="radio" value="3"/> A new hope<span className="checkmark"></span></label></td></tr>
          <tr><td><label className="container" ><Field name="fav_mov" component="input" type="radio" value="4"/> Empire strikes back<span className="checkmark"></span></label></td></tr>
          <tr><td><label className="container" ><Field name="fav_mov" component="input" type="radio" value="5"/> Return of the jedi<span className="checkmark"></span></label></td></tr>
          <tr><td className="last"><label className="container" ><Field name="fav_mov" component="input" type="radio" value="6"/> The force awakens<span className="checkmark"></span></label></td></tr>



        <tr><th><label>
        <span className="fa-stack">
       <span className="fa fa-circle fa-stack-2x"></span>
       <strong className="fa-stack-1x">
           2
       </strong>
       </span>
        <span className="question">My Favourite Jedi master <br/> <span className="select_one"> Select one </span></span></label></th></tr>

         <tr><td className="first"><label className="container"><Field name="fav_jedi" component="input" type="radio" value="0"/> Obi-Wan Kenobi<span className="checkmark"></span></label></td></tr>
         <tr><td><label className="container"><Field name="fav_jedi" component="input" type="radio" value="1"/> Mace Windu<span className="checkmark"></span></label></td></tr>
         <tr><td><label className="container"><Field name="fav_jedi" component="input" type="radio" value="2"/> Yoda <span className="checkmark"></span></label></td></tr>
         <tr><td className="last"><label className="container"><Field name="fav_jedi" component="input" type="radio" value="3"/> #EmipredidNothingWrong<span className="checkmark"></span></label></td></tr>



        <tr><th><label>
        <span className="fa-stack">
       <span className="fa fa-circle fa-stack-2x"></span>
       <strong className="fa-stack-1x">
           3
       </strong>
       </span>
        <span className="question">My favourite Sith Lord <br/> <span className="select_one"> Select one </span></span></label></th></tr>

         <tr><td className="first"><label className="container"><Field name="fav_sith" component="input" type="radio" value="0"/> Darth Sidios<span className="checkmark"></span></label></td></tr>
         <tr><td><label className="container"><Field name="fav_sith" component="input" type="radio" value="1"/> Count Dooku<span className="checkmark"></span></label></td></tr>
         <tr><td><label className="container"><Field name="fav_sith" component="input" type="radio" value="2"/> Darth Vader <span className="checkmark"></span></label></td></tr>
         <tr><td className="last"><label className="container"><Field name="fav_sith" component="input" type="radio" value="3"/> Im in love with the light side of the force<span className="checkmark"></span></label></td></tr>


      <tr><th><label>
      <span className="fa-stack">
     <span className="fa fa-circle fa-stack-2x"></span>
     <strong className="fa-stack-1x">
         4
     </strong>
     </span>
      <span className="question">My favourite Planet <br/> <span className="select_one"> Select one </span></span></label></th></tr>

         <tr><td className="first"><label className="container"><Field name="fav_planet" component="input" type="radio" value="0"/> Alderaan<span className="checkmark"></span></label></td></tr>
         <tr><td><label className="container"><Field name="fav_planet" component="input" type="radio" value="1"/> Tatooine<span className="checkmark"></span></label></td></tr>
         <tr><td><label className="container"><Field name="fav_planet" component="input" type="radio" value="2"/> Hoth<span className="checkmark"></span> </label></td></tr>
         <tr><td className="last"><label className="container"><Field name="fav_planet" component="input" type="radio" value="3"/> Mustafar<span className="checkmark"></span></label></td></tr>

        <tr><th><label>
        <span className="fa-stack">
       <span className="fa fa-circle fa-stack-2x"></span>
       <strong className="fa-stack-1x">
           5
       </strong>
       </span>
        <span className="question">My favourite Sith Lord <br/> <span className="select_one"> Select one </span></span> </label></th></tr>

         <tr><td className="first"><label className="container"><Field name="force_select" component="input" type="radio" value="0"/> Anakin<span className="checkmark"></span></label></td></tr>
         <tr><td className="last"><label className="container"><Field name="force_select" component="input" type="radio" value="1"/> Darth Vader<span className="checkmark"></span></label></td></tr>

        </tbody>
        </table>
        <button className="submit" type="submit" disabled={submitting || invalid} >Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact', // a unique name for this form
validate
})(ContactForm);

export default ContactForm;
