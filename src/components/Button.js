/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { logDOM } from '@testing-library/dom';
import React from 'react';

const Button = (props) => {
  let buttonRef = React.createRef();
 
  console.log(document.getElementById('root'));
  console.log(buttonRef);
  let clickMe = () =>{
   console.log(buttonRef.current.clientWidth);
  }
  return(
    <button ref={buttonRef} id="button" onClick={clickMe} style={{
      background: 'black',
      color: 'white',
      fontSize: '1.3rem',
      padding: '10px 20px'

    }}>
      {props.children}
    </button>
  );
};
export default Button;