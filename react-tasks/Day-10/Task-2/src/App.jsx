import { useState } from "react";

const App = () => {
  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    role: "",
    salary: "",
  });

  const [display, setDisplay] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisplay(employee);

    setEmployee({
      employeeName: "",
      employeeId: "",
      department: "",
      role: "",
      salary: "",
    });
  };

  return (
    <>
      <h2>Employee Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          value={employee.employeeName}
          placeholder="Employee Name"
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="employeeId"
          value={employee.employeeId}
          placeholder="Employee ID"
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="department"
          value={employee.department}
          placeholder="Department"
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="role"
          value={employee.role}
          placeholder="Role"
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          placeholder="Salary"
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* {display && (
        <div>
          <h2>Employee Details</h2>

          <p>Employee Name: {display.employeeName}</p>
           <p>Employee ID: {display.employeeId}</p>
          <p>Department: {display.department}</p>
          <p>Role: {display.role}</p>
          <p>Salary: {display.salary}</p>
        </div>



      )} */}

      {
        display.map((e,i)=>(
          <div key={i}>
            <p>{e.employeeName}</p>
            <p>{e.employeeId}</p>
            <p>{e.department}</p>
            <p>{e.role}</p>
            <p>{e.salary}</p>
          </div>
        ))
      }
    </>
  );
};

export default App;
