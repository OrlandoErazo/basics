/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import Number from './Number';

const Counter = (props) => {
  return(
    <div className="counter">
          <Number digit={10}/>
          <div className="counter__buttons">
            <Button>-</Button>
            <Button>+</Button>
          </div>
    </div>
  );
}
export default Counter;