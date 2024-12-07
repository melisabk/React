import React from "react";
import userphoto from "../../smiling-business-woman.jpg"
import CurrentDate from "./Date";

export default function User({ user: [name] }) {
  const source = userphoto
  const workedHours = 23
  return (
    <>
      <div className="userdiv">
        <div className="welcoming">
          <h3>Welcome {name}</h3>
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
          This Month you have worked {"  "}
          <span style={{ color: "#005b96" }}>{workedHours}</span> hours so far
        </h4>
        <p></p>
      </div>
    </>
  );
}
