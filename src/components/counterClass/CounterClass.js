/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from "react";
import Button from "./ButtonClass";
import Number from "./NumberClass";



class Counter extends Component{
  constructor(props){
    super(props);
  }
    state = {
      points: 0,
      goal:11
    };
setPoints = (point) => {    
  this.setState({...this.state, points: point}, () => {
    if (point === this.props.goal){
      // eslint-disable-next-line no-undef
      this.setGoal(this.state.points* 2);
    }
  })
}
setGoal = (goal) => {  
  this.setState({...this.state, goal: goal})
}
  render() {
      return(
    <div className="counter">
    <Number digit={this.state.points} />
    <div className="counter__buttons">
      <Button
        points={this.state.points}
        setPoints={this.setPoints}
        value="minus"
        goal={this.state.goal}
        setGoal={this.setGoal}
      >
        -
      </Button>
      <Button
        points={this.state.points}
        setPoints={this.setPoints}
        value="plus"
        goal={this.state.goal}
        setGoal={this.setGoal}
      >
        +
      </Button>
      Goal {this.state.goal}
    </div>
  </div>
      );
  };
};




// const Counter = (props) => {
//   const [points, setPoints] = useState(0);
//   // const points = useState[0];
//   // const setPoints = useState[1];
//   const [goal, setGoal] = useState(11);
//   useEffect(() => {
//     console.log("Run Every Single Time There's a Re-render or Any Data Changes ");
//     console.log("A");
//   });
//   useEffect(() => {
//     console.log("Run on First Render Only");
//     console.log("B");
//   }, []);
//   useEffect(() => {
//     console.log("Run on First Render and When Goal Changes");
//     console.log("C");
//   }, [goal]);
//   console.log(useState(0));
//   return (

//   );
// };
export default Counter;