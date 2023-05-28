import Nav from "../component/Nav.jsx"
import {Outlet} from "react-router-dom"
import React from 'react';

export default function Navigation(){
    return(
        <main>
        <Nav />
        <Outlet />
        </main>

    )
}