import React, { useEffect, useState } from "react";

export const TicketList = () => {
	const [tickets, updateTickets] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
			.then((res) => res.json())
			.then((ticketArray) => {
				updateTickets(ticketArray);
			});
	}, []);

	return (
		<>
			{tickets.map((tick) => {
				return <div key={`ticket--${tick.id}`}>
                    <p>{tick.description} submitted by {tick.customer.name} and worked on by {tick.employee.name}</p>
                    </div>;
			})}
		</>
	);
};
