import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label>My favourite SW movie?</label>
        <div>
          <label><Field name="fav_mov" component="input" type="radio" value="0"/> The Phantom Menace</label><br/>
          <label><Field name="fav_mov" component="input" type="radio" value="1"/> Attack of the clones</label><br/>
          <label><Field name="fav_mov" component="input" type="radio" value="2"/> Revenge of the Sith </label><br/>
          <label><Field name="fav_mov" component="input" type="radio" value="3"/> A new hope</label><br/>
          <label><Field name="fav_mov" component="input" type="radio" value="4"/> Empire strikes back</label><br/>
          <label><Field name="fav_mov" component="input" type="radio" value="5"/> Return of the jedi</label><br/>
          <label><Field name="fav_mov" component="input" type="radio" value="6"/> The force awakens</label><br/>
        </div>
     </div>
     <div>
        <label>My Favourite Jedi master?</label>
        <div>
         <label><Field name="fav_jedi" component="input" type="radio" value="0"/> Obi-Wan Kenobi</label><br/>
         <label><Field name="fav_jedi" component="input" type="radio" value="1"/> Mace Windu</label><br/>
         <label><Field name="fav_jedi" component="input" type="radio" value="2"/> Yoda </label><br/>
         <label><Field name="fav_jedi" component="input" type="radio" value="3"/> #EmipredidNothingWrong</label><br/>
        </div>
     </div>
     <div>
       <label>My favourite Sith Lord?</label>
       <div>
         <label><Field name="fav_sith" component="input" type="radio" value="0"/> Darth Sidios</label><br/>
         <label><Field name="fav_sith" component="input" type="radio" value="1"/> Count Dooku</label><br/>
         <label><Field name="fav_sith" component="input" type="radio" value="2"/> Darth Vader </label><br/>
         <label><Field name="fav_sith" component="input" type="radio" value="3"/> Im in love with the light side of the formReducer</label><br/>
       </div>
     </div>
     <div>
      <label>My favourite Planet?</label>
       <div>
         <label><Field name="fav_planet" component="input" type="radio" value="0"/> Alderaan</label><br/>
         <label><Field name="fav_planet" component="input" type="radio" value="1"/> Tatooine</label><br/>
         <label><Field name="fav_planet" component="input" type="radio" value="2"/> Hoth </label><br/>
         <label><Field name="fav_planet" component="input" type="radio" value="3"/> Mustafar</label><br/>
       </div>
      </div>
      <div>
        <label>My favourite Sith Lord?</label>
        <div>
         <label><Field name="force_select" component="input" type="radio" value="0"/> Anakin</label><br/>
         <label><Field name="force_select" component="input" type="radio" value="1"/> Darth Vader</label><br/>
        </div>
      </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;
