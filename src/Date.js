import React from "react";

const CurrentDate = () => {
  const currentDate = new Date().toLocaleString(); 

  return <div>  {currentDate}</div>;
};

export default CurrentDate;
