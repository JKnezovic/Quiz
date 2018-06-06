import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css'
import {fetchResult} from "../actions/resultActions"
import QuestionnaireForm from '../components/QuestionnaireForm';
import {connect} from "react-redux";
import { withRouter } from 'react-router'
import Modal from "../components/Modals";

class Questionnaire extends Component {

  handleSubmit = (values) => {
   this.props.dispatch(fetchResult(values));
 }


 Result(Title,Message) {
   const title = Title;
   const message = Message;
   if (title==="Who am I !?") {
        return(
        <div className="middle">
          <Modal alt="middle" src="../Assets/middle-image.png" title={title} message={message} />
        </div>);
   }
   else if (title=== "The last Jedi!"){
     return(
      <div className="Jedi">
        <Modal alt="jedi" src="../Assets/jedi-image.png" title={title} message={message} />
      </div>);
    }
    else if (title=== "Sith Happens!") {
     return(
      <div className="sith">
        <Modal alt="sith" src="../Assets/sith-image.png" title={title} message={message} />
      </div>);
   }
   else {
     return null;
   }}

  render() {
    const {answer} = this.props;

       return(
         <div className="Questionnaire">
         <Link to="/" id="home_link"> <i className="fas fa-arrow-left"></i> <button id="home">Home</button></Link>
         <br/>
         <QuestionnaireForm onSubmit={this.handleSubmit}/>
         <div>{this.Result(answer.title,answer.message)}</div>
         </div>

       );

  }
}
function mapStateToProps(store) {
  return { answer: store.answer.answer }
}

export default withRouter(connect(mapStateToProps)(Questionnaire));
