import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css'
import {fetchResult} from "../actions/resultActions"
import {resetResult} from "../actions/resultActions"
import QuestionnaireForm from '../components/QuestionnaireForm';
import {connect} from "react-redux";
import { withRouter } from 'react-router'
import Modal from "../components/Modals";

class Questionnaire extends Component {

  handleSubmit = (values) => {
   this.props.dispatch(fetchResult(values));
 }

 handleClick(){
   this.props.dispatch(resetResult());
 }

 Result(Title,Message) {
   const title = Title;
   const message = Message;
   if (title==="Who am I !?") {
        return  <div className="middle"><Modal >

        <img alt="middle" src={require('../Assets/middle-image.png')}/>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to="/">  <button onClick={this.handleClick.bind(this)} >Done</button></Link>
      </Modal></div>;
   }  else if (title=== "The last Jedi!")
     {
     return  <Modal >
     <div className="Jedi">
        <img  alt="jedi" src={require('../Assets/jedi-image.png')}/>
        <h1>{title}</h1>
        <p>{message}</p>
       <Link to="/">  <button onClick={this.handleClick.bind(this)} >Done</button></Link>
        </div>
      </Modal>;
    }
    else if (title=== "Sith Happens!")
   {
     return   <Modal >
     <div className="sith">
       <img alt="sith" src={require('../Assets/sith-image.png')}/>
       <h1>{title}</h1>
       <p>{message}</p>
       <Link to="/">  <button onClick={this.handleClick.bind(this)} >Done</button></Link>
       </div>
      </Modal>;
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
