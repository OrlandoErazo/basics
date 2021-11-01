/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from "react";
import Button from "./Button";
import Number from "./Number";

const Counter = (props) => {
  const [points, setPoints] = useState(0);
  // const points = useState[0];
  // const setPoints = useState[1];
  const [goal, setGoal] = useState(11);
  useEffect(() => {
    console.log("Run Every Single Time Ther's a Re-render or Any Data Changes ");
    console.log("A");
  });
  useEffect(() => {
    console.log("Run on First Render Only");
    console.log("B");
  }, []);
  useEffect(() => {
    console.log("Run on First Render and When Goal Changes");
    console.log("C");
  }, [goal]);
  console.log(useState(0));
  return (
    <div className="counter">
      <Number digit={points} />
      <div className="counter__buttons">
        <Button
          points={points}
          setPoints={setPoints}
          value="minus"
          goal={goal}
          setGoal={setGoal}
        >
          -
        </Button>
        <Button
          points={points}
          setPoints={setPoints}
          value="plus"
          goal={goal}
          setGoal={setGoal}
        >
          +
        </Button>
        Goal {goal}
      </div>
    </div>
  );
};
export default Counter;
