import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);
    const [employeeSpecialties, setSpecialties] = useState("");

	useEffect(() => {
		fetch("http://localhost:8088/employees")
			.then((res) => res.json())
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
            <div>
                Specialties: {employeeSpecialties}
            </div>
            {employees.map(emp => {
            return <p key={`employeeList--${emp.id}`}>{emp.name}</p>
            })}
        </>
    )
};
