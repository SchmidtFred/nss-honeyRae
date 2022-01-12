import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css"


export const Repairs = () => (
    <>  
        <Route
            render={() => {
                if(localStorage.getItem("honey_customer")) {
                    return (
                        <>
                            <NavBar />
                            <h1>Honey Rae Repairs</h1>
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>

    </>
);