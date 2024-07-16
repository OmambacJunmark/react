import React from "react";
import Employee from "./Employee";

const employ = () => {
  const Employ = [
    {
      name: "Alice Green",
      position: "Manager",
      salary: 85000,
      status: "Active",
    },
    {
      name: "Bob White",
      position: "Developer",
      salary: 62000,
      status: "Active",
    },
    {
      name: "Charlie Brown",
      position: "Designer",
      salary: 57000,
      status: "Active",
    },
    {
      name: "Diana Prince",
      position: "Developer",
      salary: 67000,
      status: "Active",
    },
    {
      name: "Edward Norton",
      position: "Designer",
      salary: 54000,
      status: "Active",
    },
    {
      name: "Fiona Apple",
      position: "Manager",
      salary: 91000,
      status: "Active",
    },
    {
      name: "George Harrison",
      position: "Developer",
      salary: 64000,
      status: "Active",
    },
    {
      name: "Helen Mirren",
      position: "Designer",
      salary: 59000,
      status: "Active",
    },
    {
      name: "Ian McKellen",
      position: "Manager",
      salary: 95000,
      status: "Not Active",
    },
    {
      name: "Jessica Alba",
      position: "Developer",
      salary: 68000,
      status: "Not Active",
    },
  ];

  return (
    <div>
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Employ.map((employee, index) => (
            <Employee key={index} index={index + 1} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default employ;
