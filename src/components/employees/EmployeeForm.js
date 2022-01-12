import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        specialty: ""
    });
    const history = useHistory();

    const saveEmployee = (event) => {
        event.preventDefault();

        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        
        fetch("http://localhost:8088/employees", fetchOptions)
            .then(() => history.push("/employees"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input required autoFocus type="text" className="form-control" placeholder="Full Name" onChange={e => {
                        const copy = {...employee};
                        copy.name = e.target.value;
                        setEmployee(copy);
                    }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input type="text" className="form-control" placeholder="Technical Specialty" onChange={e => {
                        const copy = {...employee};
                        copy.specialty = e.target.value;
                        setEmployee(copy);
                    }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={e => saveEmployee(e)}>Hire Employee</button>
        </form>
    )
}