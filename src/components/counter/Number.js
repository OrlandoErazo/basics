/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';

const Number = (props) => {
  return(   
          <div className="counter__number">
            {props.digit}
          </div>    
  );
}
export default Number;