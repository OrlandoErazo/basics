/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';

const Button = (props) => {
  const clickedBtn =() => {
    console.log('clicked BTN')
  }
  return(    
    <button className="counter__minus"onClick={clickedBtn}>
    {props.children}
    </button>
  );
}
export default Button;