import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Tickets.css";

export const TicketList = () => {
	const [tickets, updateTickets] = useState([]);
	const [totalTicketMessage, updateMessage] = useState("");
	const history = useHistory();

	useEffect(() => {
		fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
			.then((res) => res.json())
			.then((ticketArray) => {
				updateTickets(ticketArray);
			});
	}, []);

	useEffect(() => {
		const incompleteTickets = tickets.filter(ticket => ticket.dateCompleted === "");

		updateMessage(`You have ${incompleteTickets.length} open tickets`)		
	})

	return (
		<>
			<div><button onClick={() => history.push("/tickets/create")}>Create Ticket</button></div>
			<div>{totalTicketMessage}</div>
			{tickets.map((tick) => {
				return <div key={`ticket--${tick.id}`} className={tick.emergency ? "emergency" : ""}>
                    <p>{tick.emergency ? "🚑" : ""}{tick.description} submitted by {tick.customer.name} and worked on by {tick.employee.name}</p>
                    </div>;
			})}
		</>
	);
};
