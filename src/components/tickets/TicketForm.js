import React, { useState } from "react";
import { addEntity } from "../ApiManager";
import { useHistory } from "react-router-dom";

export const TicketForm = () => {
    const [ticket, setTicket] = useState({
        description: "",
        emergency: false
    });
    const history = useHistory();

    const saveTicket = (event) => {
        event.preventDefault();

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }


        addEntity(newTicket, "tickets", history);
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input required autoFocus type="text" id="description" className="form-control" placeholder="Brief description of problem" onChange={(e) => {
                        const copy = {...ticket};
                        copy.description = e.target.value;
                        setTicket(copy);
                    }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="emergency">Emergency:</label>
                    <input type="checkbox" id="emergency" onChange={(e) => {
                        const copy = {...ticket};
                        copy.emergency = e.target.checked;
                        setTicket(copy);
                    }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={e => saveTicket(e)}>
                Submit Ticket
            </button>
        </form>
    )
}