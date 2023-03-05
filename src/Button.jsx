import React from "react";
import "./button.css";

const Button = ({updateVal,evalInput,erase}) => {
  return (
    <div className="button">
      <div className="row">
        <div onClick={() => {erase()}} className="number zero AC">AC</div>
        <div onClick={() => {updateVal(".")}} className="number digit">.</div>
        <div onClick={() => {updateVal("*")}} className="number expression">x</div>
      </div>
      <div className="row">
        <div onClick={() => {
            updateVal("1")
        }} className="number digit">1</div>
        <div onClick={() => {updateVal("2")}} className="number digit">2</div>
        <div onClick={() => {updateVal("3")}} className="number digit">3</div>
        <div onClick={() => {
            updateVal("+")
        }} className="number expression">+</div>
      </div>
      <div className="row">
      <div onClick={() => {updateVal("4")}} className="number digit">4</div>
        <div onClick={() => {updateVal("5")}} className="number digit">5</div>
        <div onClick={() => {updateVal("6")}} className="number digit">6</div>
        <div onClick={() => {updateVal("/")}} className="number expression">/</div>
      </div>
      <div className="row">
      <div onClick={() => {updateVal("7")}} className="number digit">7</div>
        <div onClick={() => {updateVal("8")}} className="number digit">8</div>
        <div onClick={() => {updateVal("9")}} className="number digit">9</div>
        <div onClick={() => {updateVal("-")}} className="number expression">-</div>
      </div>
      <div className="row">
      <div onClick={() => {updateVal("0")}} className="number zero digit">0</div>
        <div onClick={() =>{evalInput()}} className="number zero equal">=</div>
      </div>
      
    </div>
  );
};

export default Button;
