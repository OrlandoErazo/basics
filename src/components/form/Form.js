/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";

const Form = (props) => {
  const [fname, setFname] = useState("");
  const [showError, setShowError] = useState(false);
  const formSubmitted = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  const handleChange = (e) => {
    // console.log(e);
    setFname(e.target.value);
    console.log(e.target.value);
  };
  const checkString = () => {
    if (fname.length < 5) {
      setShowError(true);
    }
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={formSubmitted}
    >
      <label htmlFor="fname">Full Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={fname}
        onChange={handleChange}
        onFocus={() => setShowError(false)}
        onBlur={() => checkString()}
      />
      <div className={`error-message ${showError ? "show" : ""}`}>
        Please enter your full name.
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
export default Form;
