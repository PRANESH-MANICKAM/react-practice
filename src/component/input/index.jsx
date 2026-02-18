import { useState } from "react";
import { employees } from "./meta";
import "./index.css";

const EmployeeEdit = () => {
  const [data, setData] = useState(employees);

  const [edit, setEdit] = useState({
    id: null,
    salary: "",
  });

  const handleEditAction = (id, currentSalary) => {
    setEdit({
      id,
      salary: currentSalary,
    });
  };

  const handleSubmit = (id) => {
    const updatedData = data.map((emp) =>
      emp.id === id ? { ...emp, salary: edit.salary } : emp
    );

    setData(updatedData);
    setEdit({ id: null, salary: "" });
  };

  return (
    <div className="employee-container">
      <table border="1" className="emp-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ id, name, address, salary }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{address}</td>
              <td>
                {id === edit.id ? (
                  <input
                    type="text"
                    value={edit.salary}
                    onChange={(e) =>
                      setEdit({ ...edit, salary: e.target.value })
                    }
                  />
                ) : (
                  salary
                )}

                <button
                  onClick={() =>
                    id === edit.id
                      ? handleSubmit(id)
                      : handleEditAction(id, salary)
                  }
                >
                  {id === edit.id ? "Submit" : "Edit"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeEdit;
