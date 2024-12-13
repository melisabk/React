import React from "react";
import User from "./user";
import userphoto from "./smiling-business-woman.jpg";

export default function Row({ src }) {
  const userData = [
    "Alice Hapor !",
    20,
    "HR Specialist",
    "alice.harpor@gmail.com",
    1,
  ];

  return (
    <div className="main-container">
      <button>
        <img src={src} alt="empphoto" />
      </button>
      <div className="user-container">
        <User user={userData} src={userphoto} />
        <User user={userData} src={userphoto} />
        <User user={userData} src={userphoto} />
        <User user={userData} src={userphoto} />
      </div>
    </div>
  );
}
