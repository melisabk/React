import React, { useState } from "react";
import data from "../../emp.json";  // Verinizi doğru bir şekilde import ettiğinizden emin olun
import "../.././emp.css";

export default function EmpShow({ index, deleteEmployee }) {
  const datam = data;

  const [showemp, sethandleemp] = useState(false);

  function handleemp() {
    sethandleemp(!showemp);
  }

  // Çalışan silme fonksiyonu
  function deleteEmp(e) {
    e.stopPropagation(); // üstteki onClick olayının tetiklenmesini engelle
    const delEmpName = datam.employees[index].name;
    if (window.confirm(`Are you sure you want to delete ${delEmpName}?`)) {
      // Silme işlemi
      deleteEmployee(index);  // Çalışanı silmek için parent bileşene fonksiyon gönderiyoruz
      alert(`${delEmpName} deleted!`);
    }
  }

  // Ücret hesaplama fonksiyonu
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

  // Eğer veri mevcut değilse hata mesajı göster
  if (!datam || !datam.employees || !datam.employees[index]) {
    return <div>Employee data is unavailable</div>;
  }

  const employee = datam.employees[index];

  return (
    <div className="container">
      <div className="emp-card" onClick={handleemp}>
        <h4>Name: {employee.name}</h4>
        <h4>Position: {employee.position.name}</h4>
        {showemp && (
          <>
            <h4>Worked Hours: </h4>
            <h5>{employee.workedHours}</h5>
            <h4>Last Time Worked:</h4>
            <h5>{employee.lastTimeWorked}</h5>
            <h4>Wage: </h4>
            <h5>{CalculateWage(employee.workedHours)}</h5>
            <h4>Birth Date:</h4>
            <h5>{employee.birthdate}</h5>
            <button onClick={(e) => deleteEmp(e)} type="button">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
