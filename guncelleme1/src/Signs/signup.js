import React from "react";
import { useState } from "react";
import "./signup.css";
export default function Signup() {
  const signin = () => {
    console.log("signin");
  };
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("you successfuly signed-up");
  };

  return (
    <div className="signup-container">
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Enter your e-mail
          <input
            type="email"
            required
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Enter your password again
          <input
            type="password"
            required
            name="firstpassword"
            value={inputs.firstpassword || ""}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Enter your password again
          <input
            type="password"
            required
            name="secondpassword"
            value={inputs.secondpassword || ""}
            onChange={handleChange}
          ></input>
        </label>

        <input type="submit" value="Sign-up" />
        <p>
          Do you have already an account
          <button>
        <strong>Sign-up</strong>
          
            {signin}</button>
          
        </p>
      </form>
    </div>
  );
}
