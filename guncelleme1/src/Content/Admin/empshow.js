import { useState } from "react";
import data from "../../emp";
import "../.././emp.css";

export default function EmpShow({ index }) {
  const datam = data;
  const [showemp, sethandleemp] = useState(false);

  function handleemp() {
    sethandleemp(!showemp);
  }

  function deleteEmp(e) {
    e.stopPropagation(); // üstteki onClick olayının tetiklenmesini engelle
    const delEmpName = datam.employees[index].name;
    if (window.confirm(`Are you sure you want to delete ${delEmpName}?`)) {
      // Silme işlemi
    }
  }

  function CalculateWage(workedHours) {
    const valueofPosition = datam.employees[index].position.hourlyWage;
    let wage;
    if (workedHours < 40) {
      wage = workedHours * valueofPosition;
    } else {
      let overtime = workedHours - 40;
      wage = overtime * ((3 / 2) * valueofPosition) + 40 * valueofPosition;
    }
    return wage;
  }

  return (
    <>
      <div className="container">
        {" "}
        {/* Container div'ini ekliyoruz */}
        <div className="emp-card" onClick={handleemp}>
          {" "}
          {/* EmpCard class'ını ekliyoruz */}
          <h4>Name: {datam.employees[index].name}</h4>
          <h4>Position: {datam.employees[index].position.name}</h4>
          {showemp && (
            <>
              <h4>Worked Hours: </h4>
              <h5>{datam.employees[index].workedHours}</h5>
              <h4>Last Time Worked:</h4>
              <h5>{datam.employees[index].lastTimeWorked}</h5>
              <h4>Wage: </h4>
              <h5>{CalculateWage(datam.employees[index].workedHours)}</h5>
              <h4>Birth Date:</h4>
              <h5>{datam.employees[index].birthdate}</h5>
              <button onClick={(e) => deleteEmp(e)} type="button">
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
