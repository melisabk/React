import React from "react";
import ReactDOM from "react-dom";


export default function Nav() {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>WorkTrack</li>
          </ul>
        </div>
        <div className="links">
          <ul>
            {" "}
            {/*
            {props.userData.job === "Admin" && (
              <li>
                <a href="admin.html">Admin</a>
              </li>
            )}
*/}
            <li>
              <a href="status.html"> Status</a>
            </li>
            <li>
              <a href="management.html">Account Management</a>
            </li>
            <li>
              <a href="LogIn.html">Log-out</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
