import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(response => {
        setEmployees(response.data.results)
    })
}, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Employees</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={employee?.id?.value || index}>
                <th>
                  <img
                    src={employee?.picture?.thumbnail}
                    alt="employee"
                  />
                </th>
                <td>{employee?.id?.value || index}</td>
                <td>{employee?.name?.first}</td>
                <td>{employee?.email}</td>
                <td>{employee?.phone}</td>
                <td>{employee?.dob?.date}</td>
              </tr>
                ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
