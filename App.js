import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./emp.json";
import "./Styles/emp.css";
import Nav from "./Components/nav.js"; // Navbar bileşenini import ediyoruz
import EmpShow from "./Components/empshow.js"; // EmpShow bileşenini import ediyoruz
import Signin from "./Components/Signin.js"; // Signin bileşenini import ediyoruz
import Signup from "./Components/Signup.js"; // Signup bileşenini import ediyoruz
import User from "./Components/User.js"; // User bileşenini import ediyoruz
import MyBigCalendar from "./Components/MyCalender.js";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />{" "}
          {/* Default olarak Signin gösterilecek */}
          <Route path="/signup" element={<Signup />} /> {/* Signup sayfası */}
          <Route
            path="/status"
            element={
              <div>
                <Nav />
                <User /> {/* Passing 'ayca' as the name prop */}
              </div>
            }
          />
          <Route
            path="/employees"
            element={
              <div>
                <Nav />

                <EmpShow index={0} />
                <EmpShow index={1} />
              </div>
            }
          />
          <Route
            path="/calendar"
            element={
              <div>
                <Nav />

                <MyBigCalendar />
              </div>
            }
          />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}
