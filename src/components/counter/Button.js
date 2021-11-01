/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';

const Button = (props) => {
  const clickedBtn =() => {
    if (props.points === props.goal){
      // eslint-disable-next-line no-undef
      props.setGoal(points* 2);
    }
    if (props.value === 'plus') {
      props.setPoints(props.points + 1);
    } else {
      props.setPoints(props.points - 1);
    }
    console.log(props.points)
    console.log('clicked BTN')
  }
  const mouseEnters =(e) => {
    console.log('Mouse went to top of button')
    console.log(e)
  }
  const mouseLeft =(e) => {
    console.log('Mouse got out of button')
    console.log(e)
  }
  return(    
    <button className="counter__minus" onClick={clickedBtn} onMouseEnter ={mouseEnters} onMouseLeave = {mouseLeft}>
    {props.children}
    </button>
  );
}
export default Button;