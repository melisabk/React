import React from "react";
import userphoto from "../smiling-business-woman.jpg";
import CurrentDate from "../Components/empshow";
import Nav from "./nav";

export default function User() {
  const source = userphoto;
  const workedHours = 23;

  return (
    <>
      <Nav />
      <div className="userdiv">
        <div className="welcoming">
          <h3>Welcome </h3> {/* Displaying the name prop */}
          <img src={source} className="circular-image" alt="userphoto" />
        </div>
        <h4>
          You have logged in{" "}
          <span style={{ color: "#005b96" }}>
            <CurrentDate />
          </span>
        </h4>
        <h4>
          Last time you logged in
          <span style={{ color: "#005b96" }}>
            <CurrentDate />
          </span>
        </h4>
        <h4>
          This month you have worked{" "}
          <span style={{ color: "#005b96" }}>{workedHours}</span> hours so far
        </h4>
        <p></p>
      </div>
    </>
  );
}
