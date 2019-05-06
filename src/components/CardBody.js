import React from "react";
import "../components/style.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return ( <div>
        <h2>Score : <span>{props.count} </span> TopScore: <span>{props.count}</span></h2> 
    <div class="card">
<div className="row">
    <div className="col-sm-3">
    <img src='/images/upsidedown.png' onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/sleep.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/devil.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/angry.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/star.png' alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/smile.png' onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/ugly.png' onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/glasses.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/face.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/heart.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/kiss.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  <div className="col-sm-3">
    <img src='/images/kiss1.png'onClick={props.handleIncrement} alt="..."/>
  </div>
  </div> 
  </div> 
  </div>
);
}

export default CardBody;
