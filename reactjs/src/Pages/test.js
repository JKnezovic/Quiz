import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css'
import {fetchResult} from "../actions/resultActions"
import ContactForm from './ContactForm';
import {connect} from "react-redux";


class Test extends Component {

  handleSubmit = (values) => {

   console.log(values);

   console.log(this.props);
   this.props.dispatch(fetchResult(values));
   console.log(this.props.answer);


 }
  render() {
  /*   const {answer} = this.props;

     if(!answer.title.length){*/
       return(
         <div className="Test">
         <Link to="/" id="home_link"> <i className="fas fa-arrow-left"></i> <button id="home">Home</button></Link>
         <br/>
         <ContactForm onSubmit={this.handleSubmit}/>
         </div>
       );
  /*   }*/

  /*  return (
      <div>
      <Link to="/" id="home_link"> <i className="fas fa-arrow-left"></i> <button id="home">Home</button></Link>

         <h1>{answer.title}</h1>

      </div>
    );*/
  }
}
function mapStateToProps(store) {
  return { answer: store.answer.answer }
}

export default connect(mapStateToProps)(Test);
