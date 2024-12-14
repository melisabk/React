import { useState, useEffect } from "react";
import data from "../emp.json";
import "../Styles/emp.css";

const CurrentDate = () => {
  const currentDate = new Date().toLocaleString();
  return <div>{currentDate}</div>;
};

export default function EmpShow({ index }) {
  const datam = data;
  const [showemp, sethandleemp] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (datam.employees[index]) {
      setLoading(false);
    }
  }, [index]);

  function handleemp() {
    sethandleemp(!showemp);
  }

  function deleteEmp(e) {
    e.stopPropagation();
    const delEmpName = datam.employees[index]?.name;
    if (window.confirm(`Are you sure you want to delete ${delEmpName}?`)) {
      // Perform deletion
    }
  }

  function CalculateWage(workedHours) {
    const valueofPosition = datam.employees[index]?.position?.hourlyWage;
    let wage;
    if (workedHours < 40) {
      wage = workedHours * valueofPosition;
    } else {
      let overtime = workedHours - 40;
      wage = overtime * ((3 / 2) * valueofPosition) + 40 * valueofPosition;
    }
    return wage;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const employee = datam.employees[index];

  return (
    <div className="container">
      <div className="emp-card" onClick={handleemp}>
        <h4>Name: {employee?.name || "N/A"}</h4>
        <h4>Position: {employee?.position?.name || "N/A"}</h4>
        {showemp && (
          <>
            <h4>Worked Hours:</h4>
            <h5>{employee?.workedHours || "N/A"}</h5>
            <h4>Last Time Worked:</h4>
            <h5>{employee?.lastTimeWorked || "N/A"}</h5>
            <h4>Wage:</h4>
            <h5>{CalculateWage(employee?.workedHours || 0)}</h5>
            <h4>Birth Date:</h4>
            <h5>{employee?.birthdate || "N/A"}</h5>
            <button onClick={(e) => deleteEmp(e)} type="button">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
