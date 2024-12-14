import React from "react";
import { Link } from "react-router-dom";
import "../Styles/nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="worktrack">
          <Link to="/">WorkTrack</Link>
        </li>
        <li>
          <Link to="/user">Status</Link>{" "}
          {/* Status tıklanınca User.js sayfasına yönlendir */}
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li className="settings">
          Settings
          <ul className="dropdown">
            <li>
              <Link to="/user">Account</Link>
            </li>
            <li>
              <Link to="/employees">Log out</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
