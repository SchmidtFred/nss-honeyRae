import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";
import { TicketList } from "./tickets/TicketList.js"
import { TicketForm } from "./tickets/TicketForm.js";
import { Ticket } from "./tickets/Ticket.js";
import { Employee } from "./employees/Employee.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/hire">
                <EmployeeForm />
            </Route>

            <Route path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}