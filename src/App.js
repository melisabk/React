import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./nav";
import User from "./User";
import userphoto from "./smiling-business-woman.jpg";
import arrow from "./arrow.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//son index 1 se admin dedim simdilik
export default function App() {
  const userData = [
    "Alice Hapor !",
    20,
    "Hr speacialist",
    "alice.harpor@gmail.com",
    1,
  ];
  return (
    <Router>
      <div>
        <Nav></Nav>

        <User user={userData} src={userphoto} />
      </div>
    </Router>
  );
}
