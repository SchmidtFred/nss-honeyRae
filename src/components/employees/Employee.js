import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Employee = () => {
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [employeeId]);

    return (
        <>
            <h2 className="employee__name">{employee.name}</h2>
            <div className="employee__specialty">Specialty: {employee.specialty}</div>
        </>
    )
}