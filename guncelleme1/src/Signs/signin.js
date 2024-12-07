import React from "react";
import { useState } from "react";
import "./signup.css";
export default function Signin() {
  const signup = () => {
    console.log("sign-up");
  };
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("you successfuly signed-in");
  };

  return (
    <>
      <h2>Sign-in</h2>
      <form onSubmit={handleSubmit}>
        <label>
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
          Enter your password
          <input
            type="password"
            required
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          ></input>
        </label>

        <input type="submit" value="Sign-in" />
        <p>Don't you have an account
          <button>
        <strong>Sign-up</strong>
          
            {signup}</button>
        </p>
      </form>
    </>
  );
}
