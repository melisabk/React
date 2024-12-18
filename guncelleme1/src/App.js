import React from "react";
//import ReactDOM from "react-dom/client";
import data from './emp.json'
import './emp.css'
import Nav from '../src/Content/nav'
//import User from "./Content/Main/User";
//import userphoto from "./smiling-business-woman.jpg";
 
import EmpShow from "./Content/Admin/empshow";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <>
        <Nav/>
      <div>
        {/* <Signin></Signin>
        
        <User user={userData} src={userphoto} />
        
        */}
        {data.employees.map((employee, index) => (
          <EmpShow key={index} index={index} />
        ))}
      </div>
    </>
  );
}
