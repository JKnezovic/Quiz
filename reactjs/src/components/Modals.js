import React, { Component } from 'react';
import '../styles/modal.css'
import {resetResult} from "../actions/resultActions"
import { Link } from 'react-router-dom'
import {connect} from "react-redux";
import { withRouter } from 'react-router'
class Modal extends Component {

  handleClick(){
    this.props.dispatch(resetResult());
  }

  render() {
    const {alt,src,message,title}=this.props;

    return (
      <div className="Modal">
      <img alt={alt} src={require({src})}/>
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to="/">  <button onClick={this.handleClick.bind(this)} >Done</button></Link>
      </div>
    );
  }
}

export default withRouter(connect(Modal));
