import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { getAllEmployees } from "../ApiManager";

export const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);
    const [employeeSpecialties, setSpecialties] = useState("");
    const history = useHistory();

	useEffect(() => {
		getAllEmployees()
			.then((employeesArray) => {
				setEmployees(employeesArray);
			});
	},
    []
    );

    useEffect(() => {
        const special = employees.map(emp => emp.specialty);
        setSpecialties(special.join(", "));
    }, [employees]);

    return (
        <>
            <div><button onClick={() => history.push("/employees/hire")}>Hire Employee</button></div>
            <div>
                Specialties: {employeeSpecialties}
            </div>
            {employees.map(emp => {
            return <div key={`employeeList--${emp.id}`}>
                        <Link  to={`/employees/${emp.id}`}>{emp.name}</Link>
                    </div>
            })}
        </>
    )
};
