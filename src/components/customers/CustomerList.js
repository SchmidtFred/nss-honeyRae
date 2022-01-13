import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../ApiManager";

export const CustomerList = () => {
	const [customers, setCustomers] = useState([]);
    const [totalCustomerMessage, updateMessage] = useState("");

	useEffect(() => {
		getAllCustomers()
			.then((customersArray) => {
				setCustomers(customersArray);
			});
	}, 
    []
    );

    useEffect(() => {
        if (customers.length === 1) {
            updateMessage("You have 1 customer")
        }
        else {
            updateMessage(`You have ${customers.length} customers`)
        }
    },
        [customers]
    )

	return (
		<>
            <div>{totalCustomerMessage}</div>
			{customers.slice(0, 5).map((cus) => {
				return <p key={`customerList--${cus.id}`}>{cus.name}</p>
			})}
		</>
	);
};
